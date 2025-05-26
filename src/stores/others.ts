import { create } from "zustand";

// 1. Types
type CredentialsState = {
  credentials: {
    email: string;
    password: string;
  };
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  clearCredentials: () => void;
};

type RememberMeState = {
  isChecked: boolean;
  setIsChecked: (v: boolean) => void;
};

// 2. Store for credentials
const storedCredentials = create<CredentialsState>((set) => ({
  credentials: {
    email: "",
    password: "",
  },
  setEmail: (email) =>
    set((state) => ({
      credentials: { ...state.credentials, email },
    })),
  setPassword: (password) =>
    set((state) => ({
      credentials: { ...state.credentials, password },
    })),
  clearCredentials: () =>
    set(() => ({
      credentials: { email: "", password: "" },
    })),
}));

// 3. Store for rememberMe
const rememberMe = create<RememberMeState>((set) => ({
  isChecked: false,
  setIsChecked: (isChecked) => set({ isChecked }),

}));

// 4. Export
export { rememberMe, storedCredentials };


