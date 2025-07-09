// store/useAuthStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  role: string | null;
  setUser: (user: any) => void;
  setToken: (token: string) => void;
  login: (user: any, token: string, role: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      role: null,

      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),

      login: (user, token, role) =>
        set({ user, token, role, isAuthenticated: true }),

      logout: () =>
        set({ user: null, token: null, role: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage', // Key in localStorage
    }
  )
);
