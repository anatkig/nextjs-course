import { useState } from 'react';
import type { Task } from '../types';
import { CodeBlock } from './CodeBlock';

interface TaskViewProps {
  task: Task;
  taskIndex: number;
  onComplete: () => void;
  completed?: boolean;
}

function normalizeCode(code: string): string {
  return code.replace(/\s+/g, '');
}

export function TaskView({ task, taskIndex, onComplete, completed: alreadyCompleted }: TaskViewProps) {
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [userCode, setUserCode] = useState(task.starterCode);
  const [completed, setCompleted] = useState(!!alreadyCompleted);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleCheck = () => {
    const isCorrect = normalizeCode(userCode) === normalizeCode(task.solution);
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect && !completed) {
      setCompleted(true);
      onComplete();
    }
  };

  return (
    <div className={`task-view ${completed ? 'task-solved' : ''}`}>
      <h3>📝 Task {taskIndex + 1}</h3>
      <p className="task-description">{task.description}</p>

      <div className="task-code">
        <h4>Your Code</h4>
        <textarea
          className="code-editor"
          value={userCode}
          onChange={(e) => { setUserCode(e.target.value); setFeedback(null); }}
          rows={userCode.split('\n').length + 2}
          spellCheck={false}
        />
      </div>

      {feedback === 'correct' && (
        <div className="task-feedback correct">✅ Correct! Well done.</div>
      )}
      {feedback === 'incorrect' && (
        <div className="task-feedback incorrect">❌ Not quite right. Check your code and try again.</div>
      )}

      <div className="task-actions">
        <button className="btn btn-primary" onClick={handleCheck} disabled={completed}>
          {completed ? '✓ Solved' : 'Check Solution'}
        </button>
        <button className="btn" onClick={() => setShowHints(!showHints)}>
          {showHints ? 'Hide Hints' : 'Show Hints'}
        </button>
        <button className="btn" onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? 'Hide Correct Code' : 'Show Correct Code'}
        </button>
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
          <h4>Correct Code</h4>
          <CodeBlock code={task.solution} />
        </div>
      )}
    </div>
  );
}
