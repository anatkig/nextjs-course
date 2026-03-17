import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { course } from '../data';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { TaskView } from '../components/TaskView';

export function TopicPage() {
  const { moduleId, topicId } = useParams<{ moduleId: string; topicId: string }>();
  const navigate = useNavigate();
  const { progress, dispatch } = useProgress();

  const mod = course.modules.find(m => m.id === moduleId);
  if (!mod) {
    return (
      <div className="page">
        <h1>Module Not Found</h1>
        <Link to="/" className="btn">Back to Dashboard</Link>
      </div>
    );
  }

  const topicIndex = mod.topics.findIndex(t => t.id === topicId);
  const topic = mod.topics[topicIndex];

  if (!topic) {
    return (
      <div className="page">
        <h1>Topic Not Found</h1>
        <Link to={`/module/${mod.id}`} className="btn">Back to Module</Link>
      </div>
    );
  }

  const handleTaskComplete = () => {
    dispatch({ type: 'COMPLETE_TOPIC', payload: { topicId: topic.id } });
  };

  const tp = progress.topicProgress[topic.id];
  const nextTopic = mod.topics[topicIndex + 1];
  const prevTopic = mod.topics[topicIndex - 1];

  return (
    <div className="page topic-page">
      <div className="breadcrumb">
        <Link to="/">Dashboard</Link>
        <span> / </span>
        <Link to={`/module/${mod.id}`}>{mod.title}</Link>
        <span> / </span>
        <span>{topic.title}</span>
      </div>

      <h1>{topic.title}</h1>

      <div className="topic-content">
        <MarkdownRenderer content={topic.explanation} />
      </div>

      <hr />

      <TaskView key={topic.id} task={topic.task} onComplete={handleTaskComplete} completed={!!tp?.completed} />

      <div className="topic-navigation">
        {prevTopic && (
          <button className="btn" onClick={() => navigate(`/module/${mod.id}/topic/${prevTopic.id}`)}>← {prevTopic.title}</button>
        )}
        {nextTopic ? (
          <button className="btn btn-primary" onClick={() => navigate(`/module/${mod.id}/topic/${nextTopic.id}`)}>{nextTopic.title} →</button>
        ) : (
          <button className="btn btn-primary" onClick={() => navigate(`/module/${mod.id}`)}>Back to Module →</button>
        )}
      </div>
    </div>
  );
}
