import { SellersProfileType } from "@/types/SellersProfileType";
import { create } from 'zustand';
// Zustand store type
interface SellerProfileStore {
  profile: SellersProfileType;
  setProfile: (profile: SellersProfileType) => void;
  clearProfile: () => void;
  updateProfile: (updates: Partial<SellersProfileType>) => void;
}

// Zustand store
export const useSellerProfile = create<SellerProfileStore>((set) => ({
  profile: {} as SellersProfileType,
  setProfile: (profile) => set({ profile }),
  clearProfile: () => set({ profile: {} as SellersProfileType }),
  updateProfile: (updates) =>
    set((state) => ({
      profile: { ...state.profile, ...updates },
    })),
}));