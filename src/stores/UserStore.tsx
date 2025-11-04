import { create } from "zustand";
import { User } from "@/types/user";
import { jwtDecode } from "jwt-decode";

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (patch: Partial<User>) => void;
  logout: () => void;
  loadUserFromStorage: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  updateUser: (patch) =>
    set((state) =>
      state.user ? { user: { ...state.user, ...patch } } : state
    ),

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },

  loadUserFromStorage: () => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        const user = JSON.parse(savedUser);
        set({ user });
      }
    }
  },
}));

export default useUserStore;
