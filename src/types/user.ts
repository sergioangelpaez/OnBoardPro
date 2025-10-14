export interface CourseProgress {
  id: string;
  title: string;
  progress: number; // 0 to 1
}

export interface LeaderboardInfo {
  points: number;
  rank: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "student" | "teacher" | "admin";
  avatar?: string;
  xp: number;
  level: number;
}
