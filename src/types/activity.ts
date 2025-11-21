import { Achievement } from "./achievement";
import { Course } from "./course";

export interface Activity {
  id: string;
  name: string;
  description: string;
  attachment: string;
  assignedTo: Course[];
  xp: number;
  achievements?: Achievement[];
}
