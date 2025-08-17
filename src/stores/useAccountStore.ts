import { create } from "zustand";
import { persist } from "zustand/middleware";

type AccountState = {
  accountType: "buyer" | "seller" | null;
  businessType: "individual" | "business" | null;
  setAccountType: (type: "buyer" | "seller") => void;
  setBusinessType: (type: "individual" | "business") => void;
  reset: () => void;
};

export const useAccountStore = create<AccountState>()(
  persist(
    (set) => ({
      accountType: null,
      businessType: null,
      setAccountType: (type) => set({ accountType: type }),
      setBusinessType: (type) => set({ businessType: type }),
      reset: () => set({ accountType: null, businessType: null }),
    }),
    {
      name: "account-storage", // 🔑 key in localStorage
    }
  )
);
