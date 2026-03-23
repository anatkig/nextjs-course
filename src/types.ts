export interface Task {
  description: string;
  starterCode: string;
  solution: string;
  hints: string[];
}

export interface Topic {
  id: string;
  title: string;
  explanation: string;
  tasks: Task[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
  test: QuizQuestion[];
}

export interface Course {
  title: string;
  description: string;
  modules: Module[];
  finalTest: QuizQuestion[];
}

export interface TopicProgress {
  completed: boolean;
  tasksCompleted: boolean[];
}

export interface TestResult {
  score: number;
  total: number;
  passed: boolean;
  answers: Record<string, number>;
}

export interface ActivityStats {
  attempts: number;
  correct: number;
  bestStreak: number;
}

export interface UserProgress {
  levelTestResult: TestResult | null;
  topicProgress: Record<string, TopicProgress>;
  moduleTestResults: Record<string, TestResult>;
  finalTestResult: TestResult | null;
  randomQuestionStats: ActivityStats;
  quickLineStats: ActivityStats;
}
