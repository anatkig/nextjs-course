import { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { Sidebar } from './components/Sidebar';
import { RandomQuestion } from './components/RandomQuestion';
import { QuickLine } from './components/QuickLine';
import { Dashboard } from './pages/Dashboard';
import { LevelTest } from './pages/LevelTest';
import { ModulePage } from './pages/ModulePage';
import { TopicPage } from './pages/TopicPage';
import { FinalTest } from './pages/FinalTest';
import './styles.css';

function AppContent() {
  const [showRandom, setShowRandom] = useState(false);
  const [showQuickLine, setShowQuickLine] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="app-layout">
      <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
        ☰
      </button>
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}
      <Sidebar
        onRandomQuestion={() => { setShowRandom(true); closeSidebar(); }}
        onQuickLine={() => { setShowQuickLine(true); closeSidebar(); }}
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />
      {showRandom && <RandomQuestion onClose={() => setShowRandom(false)} />}
      {showQuickLine && <QuickLine onClose={() => setShowQuickLine(false)} />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/level-test" element={<LevelTest />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/module/:moduleId/topic/:topicId" element={<TopicPage />} />
          <Route path="/final-test" element={<FinalTest />} />
          <Route path="*" element={<div className="page"><h1>404 — Page Not Found</h1></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </HashRouter>
  );
}
