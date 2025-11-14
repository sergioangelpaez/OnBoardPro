export interface User {
  id: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  level: number;
  role: "admin" | "student" | "instructor";
  status: string;
  xp: number;
  average: number;
  missions: number;
  streak: number;
}
