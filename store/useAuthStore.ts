import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null; 
  signIn: (token: string, user: User) => void;
  signUp: (token: string, user: User) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      user: null, 

      signIn: (token, user) =>
        set({ isAuthenticated: true, token, user }),

      signUp: (token, user) =>
        set({ isAuthenticated: true, token, user }),

      signOut: () =>
        set({ isAuthenticated: false, token: null, user: null }),
    }),
    {
      name: "vibenpay-auth",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : ({} as Storage)
      ),
    }
  )
);
