import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SellersProfileType, UsersProfileType } from "@/types/SellersProfileType";

// Default empty profile matching the SellersProfileType
const defaultVendorProfile: SellersProfileType = {
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
const defaultUserProfile: UsersProfileType = {
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
      profile: defaultVendorProfile,
      setProfile: (profile) => set({ profile }),
      clearProfile: () => set({ profile: defaultVendorProfile }),
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


interface UsersProfileStore {
  profile: SellersProfileType;
  setProfile: (profile: UsersProfileType) => void;
  clearProfile: () => void;
  updateProfile: (updates: Partial<SellersProfileType>) => void;
}


export const useUserProfile = create<UsersProfileStore>()(
  persist(
    (set) => ({
      profile: defaultUserProfile,
      setProfile: (profile) => set({ profile }),
      clearProfile: () => set({ profile: defaultUserProfile }),
      updateProfile: (updates) =>
        set((state) => ({
          profile: { ...state.profile, ...updates },
        })),
    }),
    {
      name: "users-profile", // localStorage key
      // Optional: customize what gets persisted
      partialize: (state) => ({ profile: state.profile }),
    }
  )
);


// KO111111111111IL.   
// "first_name": "Bimbo",
      //  "last_name": "Olakunle",
      //  "middle_name": "Doherty",
// 
//  22222222222
// "first_name": "Trevor",
      //  "last_name": "Mandela",
