import { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { getRandomLevelTest } from '../data';
import { Quiz } from '../components/Quiz';
import type { TestResult, QuizQuestion } from '../types';

type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'Proficient' | 'Highly Proficient';

function getLevel(percent: number): Level {
  if (percent >= 90) return 'Highly Proficient';
  if (percent >= 75) return 'Proficient';
  if (percent >= 55) return 'Advanced';
  if (percent >= 35) return 'Intermediate';
  return 'Beginner';
}

const levelDescriptions: Record<Level, string> = {
  'Beginner': 'You\'re just getting started with Next.js. We recommend beginning from Module 1 and working through the entire course.',
  'Intermediate': 'You know the basics! Focus on Modules 3–6 to strengthen your SSR/SSG understanding and data fetching.',
  'Advanced': 'Solid foundation! Check out Modules 7–10 covering API routes, middleware, and optimization.',
  'Proficient': 'You have strong Next.js skills. Review Modules 11–15 for advanced patterns, then take the final test.',
  'Highly Proficient': 'Excellent Next.js knowledge! You can go straight to the final test, or browse specific topics for a refresher.',
};

const levelColors: Record<Level, string> = {
  'Beginner': '#ef4444',
  'Intermediate': '#f59e0b',
  'Advanced': '#3b82f6',
  'Proficient': '#22c55e',
  'Highly Proficient': '#a855f7',
};

function LevelResultBanner({ result }: { result: TestResult }) {
  const percent = Math.round((result.score / result.total) * 100);
  const level = getLevel(percent);
  const color = levelColors[level];

  return (
    <div className="level-result">
      <div className="level-badge" style={{ borderColor: color, color }}>{level}</div>
      <p className="level-score">{result.score}/{result.total} ({percent}%)</p>
      <p className="level-description">{levelDescriptions[level]}</p>
      <div className="level-scale">
        {(['Beginner', 'Intermediate', 'Advanced', 'Proficient', 'Highly Proficient'] as Level[]).map(l => (
          <div key={l} className={`level-dot ${l === level ? 'active' : ''}`} style={l === level ? { background: levelColors[l] } : {}}>
            <span className="level-dot-label">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LevelTest() {
  const { progress, dispatch } = useProgress();
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => getRandomLevelTest());

  const handleComplete = (result: TestResult) => {
    dispatch({ type: 'SET_LEVEL_TEST', payload: result });
  };

  const handleRetake = () => {
    dispatch({ type: 'RESET_LEVEL_TEST' });
    setQuestions(getRandomLevelTest());
  };

  return (
    <div className="page">
      <h1>Level Evaluation Test</h1>
      <p className="subtitle">
        30 randomly selected questions to evaluate your Next.js & SSR proficiency level.
        Each attempt gives you a different set of questions.
      </p>
      {progress.levelTestResult && (
        <>
          <LevelResultBanner result={progress.levelTestResult} />
          <div className="retake-section">
            <button className="btn" onClick={handleRetake}>Retake with New Questions</button>
          </div>
        </>
      )}
      {!progress.levelTestResult && (
        <Quiz
          key={questions[0]?.id}
          title="Next.js Knowledge Assessment"
          questions={questions}
          onComplete={handleComplete}
          renderResult={(r) => <LevelResultBanner result={r} />}
        />
      )}
    </div>
  );
}
