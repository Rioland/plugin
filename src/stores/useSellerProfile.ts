import { create } from "zustand";
import { SellersProfileType } from "@/types/SellersProfileType";

type SellerProfileState = {
  profile: SellersProfileType | null;
  setProfile: (profile: SellersProfileType) => void;
};

export const useSellerProfile = create<SellerProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));
