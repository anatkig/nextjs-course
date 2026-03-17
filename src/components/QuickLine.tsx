import { useState, useCallback } from 'react';
import { quickLineChallenges, type QuickLineChallenge } from '../data/quickLines';
import { useProgress } from '../context/ProgressContext';

function pickRandom(): QuickLineChallenge {
  return quickLineChallenges[Math.floor(Math.random() * quickLineChallenges.length)];
}

interface Props {
  onClose: () => void;
}

export function QuickLine({ onClose }: Props) {
  const { dispatch } = useProgress();
  const [challenge, setChallenge] = useState<QuickLineChallenge>(pickRandom);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showStreakEnd, setShowStreakEnd] = useState(false);
  const [endedStreak, setEndedStreak] = useState(0);

  const next = useCallback(() => {
    setChallenge(pickRandom());
    setAnswer('');
    setResult(null);
    setShowHint(false);
    setShowStreakEnd(false);
  }, []);

  const handleSubmit = () => {
    if (result) return;
    const trimmed = answer.trim();
    if (!trimmed) return;
    if (trimmed.replace(/\s+/g, '') === challenge.answer.trim().replace(/\s+/g, '')) {
      setResult('correct');
      const newStreak = streak + 1;
      setStreak(newStreak);
      dispatch({ type: 'RECORD_QUICK_LINE', payload: { correct: true, streak: newStreak } });
    } else {
      setResult('incorrect');
      setEndedStreak(streak);
      setShowStreakEnd(true);
      setStreak(0);
      dispatch({ type: 'RECORD_QUICK_LINE', payload: { correct: false, streak: 0 } });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content ql-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3 className="ql-prompt">{challenge.prompt}</h3>

        {!showStreakEnd && (
          <>
            <div className="ql-code-block">
              {challenge.codeBefore.map((line, i) => (
                <div key={'b' + i} className="ql-code-line">{line || '\u00A0'}</div>
              ))}
              <div className="ql-code-input-row">
                <span className="ql-blank-marker">→</span>
                <input
                  className={'ql-input' + (result === 'correct' ? ' correct' : result === 'incorrect' ? ' incorrect' : '')}
                  value={answer}
                  onChange={e => setAnswer(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your one line here..."
                  disabled={result !== null}
                  autoFocus
                />
              </div>
              {challenge.codeAfter.map((line, i) => (
                <div key={'a' + i} className="ql-code-line">{line || '\u00A0'}</div>
              ))}
            </div>

            {!result && (
              <div className="ql-actions">
                {!showHint && (
                  <button className="btn btn-secondary" onClick={() => setShowHint(true)}>💡 Hint</button>
                )}
                <button className="btn btn-primary" onClick={handleSubmit}>Check ✓</button>
              </div>
            )}

            {showHint && !result && <p className="ql-hint">💡 {challenge.hint}</p>}

            {result === 'correct' && (
              <div className="ql-result correct">
                <p>✅ Correct!</p>
                <div className="ql-actions">
                  <span className="rq-streak">🔥 Streak: {streak}</span>
                  <button className="btn btn-primary" onClick={next}>Next Quick Line →</button>
                </div>
              </div>
            )}
          </>
        )}

        {showStreakEnd && (
          <div className="ql-streak-end">
            <p>❌ Not quite. The correct line was:</p>
            <div className="ql-answer-reveal"><code>{challenge.answer}</code></div>
            <p className="ql-streak-msg">That was <strong>{endedStreak}</strong> correct answer{endedStreak !== 1 ? 's' : ''} in a row. Keep going!</p>
            <button className="btn btn-primary" onClick={next}>Continue →</button>
          </div>
        )}
      </div>
    </div>
  );
}
