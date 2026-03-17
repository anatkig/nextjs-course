import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { course } from '../data';
import { Quiz } from '../components/Quiz';
import type { TestResult } from '../types';

export function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { progress, dispatch } = useProgress();

  const modIndex = course.modules.findIndex(m => m.id === moduleId);
  const mod = course.modules[modIndex];

  if (!mod) {
    return (
      <div className="page">
        <h1>Module Not Found</h1>
        <Link to="/" className="btn">Back to Dashboard</Link>
      </div>
    );
  }

  const handleTestComplete = (result: TestResult) => {
    dispatch({ type: 'SET_MODULE_TEST', payload: { moduleId: mod.id, result } });
  };

  const nextModule = course.modules[modIndex + 1];
  const prevModule = course.modules[modIndex - 1];

  return (
    <div className="page module-page">
      <div className="module-header">
        <span className="module-badge">Module {modIndex + 1}</span>
        <h1>{mod.title}</h1>
        <p className="subtitle">{mod.description}</p>
      </div>

      <div className="topics-list">
        <h2>Topics</h2>
        {mod.topics.map((topic, i) => {
          const tp = progress.topicProgress[topic.id];
          return (
            <Link key={topic.id} to={`/module/${mod.id}/topic/${topic.id}`} className={`topic-card ${tp?.completed ? 'completed' : ''}`}>
              <span className="topic-number">{i + 1}</span>
              <span className="topic-title">{topic.title}</span>
              {tp?.completed && <span className="check">✓</span>}
            </Link>
          );
        })}
      </div>

      <div className="module-test-section">
        <h2>Module Test</h2>
        {mod.topics.every(t => progress.topicProgress[t.id]?.completed) ? (
          <Quiz title={`${mod.title} — Test`} questions={mod.test} onComplete={handleTestComplete} previousResult={progress.moduleTestResults[mod.id]} />
        ) : (
          <p className="test-locked">🔒 Complete all practice tasks above to unlock the module test.</p>
        )}
      </div>

      <div className="module-navigation">
        {prevModule && <button className="btn" onClick={() => navigate(`/module/${prevModule.id}`)}>← {prevModule.title}</button>}
        {nextModule && <button className="btn btn-primary" onClick={() => navigate(`/module/${nextModule.id}`)}>{nextModule.title} →</button>}
      </div>
    </div>
  );
}
