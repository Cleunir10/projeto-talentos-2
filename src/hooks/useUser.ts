import { create } from "zustand";
import { User } from "../typings.d";

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useUser = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
})); 