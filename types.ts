
export enum Screen {
  HOME = 'home',
  STATS = 'stats',
  CAPTURE = 'capture',
  ANALYSIS = 'analysis',
  PROFILE = 'profile',
  SESSIONS = 'sessions'
}

export interface Insight {
  id: string;
  type: 'positive' | 'improvement' | 'technical';
  title: string;
  description: string;
}

export interface Session {
  id: string;
  title: string;
  date: string;
  swings: number;
  avgSpeed: number;
  tempo: string;
  score: number;
  thumbnail: string;
}

// Fix: Added missing Drill interface to resolve the import error in screens/Drills.tsx
export interface Drill {
  id: string;
  title: string;
  focus: string;
  duration: string;
  difficulty: string;
  imageUrl: string;
}
