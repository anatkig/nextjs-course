import { useProgress } from '../context/ProgressContext';
import { course } from '../data';
import { Quiz } from '../components/Quiz';
import type { TestResult } from '../types';

export function FinalTest() {
  const { progress, dispatch } = useProgress();

  const handleComplete = (result: TestResult) => {
    dispatch({ type: 'SET_FINAL_TEST', payload: result });
  };

  return (
    <div className="page">
      <h1>🏆 Final Test</h1>
      <p className="subtitle">
        This comprehensive test covers all modules. You need 70% to pass.
        Take your time!
      </p>
      <Quiz
        title="Next.js & SSR Mastery — Final Assessment"
        questions={course.finalTest}
        onComplete={handleComplete}
        previousResult={progress.finalTestResult}
      />
    </div>
  );
}
