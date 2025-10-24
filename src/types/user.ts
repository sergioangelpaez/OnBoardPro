import { Course } from "./course";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "student" | "teacher" | "admin";
  avatar?: string;
  xp: number;
  level: number;
  courses: Course[];
}
