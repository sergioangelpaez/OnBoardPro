"use client";
import { create } from "zustand";
import { User } from "@/types/user";

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (patch: Partial<User>) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  // Dummy data for testing
  user: {
    id: 1,
    name: "Sergio Pérez",
    email: "sergio@ejemplo.com",
    role: "student",
    xp: 8200,
    level: 15,
    avatar: "https://i.pravatar.cc/150?img=12",
    preferences: { theme: "light", language: "es" },
    enrolledCourses: [
      { id: "c1", title: "Intro a React", progress: 0.35 },
      { id: "c2", title: "Backend con Node", progress: 0.1 },
    ],
    leaderboard: { points: 1240, rank: 23 },
  },

  setUser: (user) => set({ user }),
  updateUser: (patch) =>
    set((state) =>
      state.user ? { user: { ...state.user, ...patch } } : state
    ),
  logout: () => set({ user: null }),
}));

export default useUserStore;
