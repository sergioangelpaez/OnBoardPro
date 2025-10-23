export interface Course {
  id: string;
  name: string;
  status: "active" | "archived" | "closed";
  instructor: string;
  activities: number;
  submissions: number;
}
