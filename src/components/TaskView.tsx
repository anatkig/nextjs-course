import { useState } from 'react';
import type { Task } from '../types';
import { CodeBlock } from './CodeBlock';

interface TaskViewProps {
  task: Task;
  onComplete: () => void;
  completed?: boolean;
}

export function TaskView({ task, onComplete, completed: alreadyCompleted }: TaskViewProps) {
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [userCode, setUserCode] = useState(task.starterCode);
  const [completed, setCompleted] = useState(!!alreadyCompleted);

  const handleComplete = () => {
    setCompleted(true);
    onComplete();
  };

  return (
    <div className="task-view">
      <h3>📝 Practice Task</h3>
      <p className="task-description">{task.description}</p>

      <div className="task-code">
        <h4>Your Code</h4>
        <textarea
          className="code-editor"
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          rows={userCode.split('\n').length + 2}
          spellCheck={false}
        />
      </div>

      <div className="task-actions">
        <button className="btn" onClick={() => setShowHints(!showHints)}>
          {showHints ? 'Hide Hints' : 'Show Hints'}
        </button>
        <button className="btn" onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
        {!completed && (
          <button className="btn btn-primary" onClick={handleComplete}>
            Mark as Completed ✓
          </button>
        )}
        {completed && <span className="completed-badge">✓ Completed</span>}
      </div>

      {showHints && (
        <div className="hints">
          <h4>Hints</h4>
          <ul>
            {task.hints.map((hint, i) => (
              <li key={i}>{hint}</li>
            ))}
          </ul>
        </div>
      )}

      {showSolution && (
        <div className="solution">
          <h4>Solution</h4>
          <CodeBlock code={task.solution} />
        </div>
      )}
    </div>
  );
}
