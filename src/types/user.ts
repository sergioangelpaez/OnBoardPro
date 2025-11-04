import type { Group } from "./group";
import type { Course } from "./course";

export interface User {
  id: string;
  fisrtname: string;
  lastname: string;
  phonenumber: StringConstructor;
  email: string;
  level: number;
  rol: string;
  status: string;
  xp?: number;
  group?: string;
  groups?: Group[];
  courses?: Course[];
}
