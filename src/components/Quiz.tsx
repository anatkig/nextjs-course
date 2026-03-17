import { useState } from 'react';
import type { QuizQuestion, TestResult } from '../types';

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
  onComplete: (result: TestResult) => void;
  previousResult?: TestResult | null;
  renderResult?: (result: TestResult) => React.ReactNode;
}

export function Quiz({ title, questions, onComplete, previousResult, renderResult }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<TestResult | null>(previousResult ?? null);

  if (result && !submitted) {
    const defaultBanner = (
      <div className="result-banner">
        <p className={result.passed ? 'pass' : 'fail'}>
          {result.passed ? '✓ Passed' : '✗ Failed'} — {result.score}/{result.total} (
          {Math.round((result.score / result.total) * 100)}%)
        </p>
      </div>
    );
    return (
      <div className="quiz completed-quiz">
        <h2>{title}</h2>
        {renderResult ? renderResult(result) : defaultBanner}
        <button className="btn" onClick={() => { setResult(null); setAnswers({}); }}>
          Retake Test
        </button>
      </div>
    );
  }

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    let score = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctAnswer) score++;
    }
    const testResult: TestResult = {
      score,
      total: questions.length,
      passed: score >= Math.ceil(questions.length * 0.7),
      answers,
    };
    setResult(testResult);
    setSubmitted(true);
    onComplete(testResult);
  };

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  return (
    <div className="quiz">
      <h2>{title}</h2>
      <p className="quiz-progress">
        {Object.keys(answers).length} of {questions.length} answered
      </p>
      <div className="questions">
        {questions.map((q, qi) => (
          <div key={q.id} className={`question ${submitted ? 'revealed' : ''}`}>
            <h3>{qi + 1}. {q.question}</h3>
            <div className="options">
              {q.options.map((opt, oi) => {
                let cls = 'option';
                if (answers[q.id] === oi) cls += ' selected';
                if (submitted) {
                  if (oi === q.correctAnswer) cls += ' correct';
                  else if (answers[q.id] === oi) cls += ' incorrect';
                }
                return (
                  <button key={oi} className={cls} onClick={() => handleSelect(q.id, oi)} disabled={submitted}>
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && <p className="explanation">{q.explanation}</p>}
          </div>
        ))}
      </div>
      {!submitted && (
        <button className="btn btn-primary submit-btn" onClick={handleSubmit} disabled={!allAnswered}>
          Submit Answers
        </button>
      )}
      {submitted && result && (
        renderResult ? renderResult(result) : (
          <div className="result-banner">
            <p className={result.passed ? 'pass' : 'fail'}>
              {result.passed ? '✓ Passed' : '✗ Failed'} — {result.score}/{result.total} (
              {Math.round((result.score / result.total) * 100)}%)
            </p>
          </div>
        )
      )}
    </div>
  );
}
