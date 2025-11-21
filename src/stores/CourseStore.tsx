import { create } from "zustand";
import type { Course } from "@/types/course";

interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;

  fetchCourses: () => Promise<void>;
  setCourses: (courses: Course[]) => void;
  updateCourse: (id: string, patch: Partial<Course>) => void;
  addCourse: (course: Course) => void;
  removeCourse: (id: string) => void;
}

const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  loading: false,
  error: null,

  fetchCourses: async () => {
    set({ loading: true, error: null });

    try {
      const res = await fetch("/api/courses/get/all");
      if (!res.ok) throw new Error("Failed to fetch courses");

      const data = await res.json();
      set({ courses: data, loading: false });
    } catch (err: unknown) {
      let message = "Unknown error";
      if (err instanceof Error) {
        message = err.message;
      }
      set({ error: message, loading: false });
    }
  },

  setCourses: (courses) => set({ courses }),

  updateCourse: (id, patch) =>
    set((state) => ({
      courses: state.courses.map((c) => (c.id === id ? { ...c, ...patch } : c)),
    })),

  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),

  removeCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== id),
    })),
}));

export default useCourseStore;
