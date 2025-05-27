import { create } from "zustand";
import { persist } from "zustand/middleware";


// 1. Credentials store
type CredentialsState = {
  credentials: { email: string; password: string };
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  clearCredentials: () => void;
};

export const storedCredentials = create(
  persist<CredentialsState>(
    (set) => ({
      credentials: { email: "", password: "" },
      setEmail: (email) => set((state) => ({
        credentials: { ...state.credentials, email },
      })),
      setPassword: (password) => set((state) => ({
        credentials: { ...state.credentials, password },
      })),
      clearCredentials: () => set({ credentials: { email: "", password: "" } }),
    }),
    { name: "stored-credentials" }
  )
);

// 2. RememberMe store
type RememberMeState = {
  isChecked: boolean;
  setIsChecked: (v: boolean) => void;
};

export const rememberMe = create(
  persist<RememberMeState>(
    (set) => ({
      isChecked: false,
      setIsChecked: (isChecked) => set({ isChecked }),
    }),
    { name: "remember-me" }
  )
);


