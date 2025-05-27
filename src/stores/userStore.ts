import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SellersProfileType } from "@/types/SellersProfileType";

// Default empty profile matching the SellersProfileType
const defaultProfile: SellersProfileType = {
  id: 0,
  profile_picture: "",
  email: "",
  username: "",
  name: "",
  role: "",
  account_type: "",
  firstname: "",
  lastname: "",
  phone_number: null,
  country: "",
  bio: "",
  skills: [],
  kycverifications: [],
  awards: [],
  experiences: [],
  educations: [],
  languages: [],
};

// Store definition
interface SellerProfileStore {
  profile: SellersProfileType;
  setProfile: (profile: SellersProfileType) => void;
  clearProfile: () => void;
  updateProfile: (updates: Partial<SellersProfileType>) => void;
}

export const useSellerProfile = create<SellerProfileStore>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      setProfile: (profile) => set({ profile }),
      clearProfile: () => set({ profile: defaultProfile }),
      updateProfile: (updates) =>
        set((state) => ({
          profile: { ...state.profile, ...updates },
        })),
    }),
    {
      name: "seller-profile", // localStorage key
      // Optional: customize what gets persisted
      partialize: (state) => ({ profile: state.profile }),
    }
  )
);
