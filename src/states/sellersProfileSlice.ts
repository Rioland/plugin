import { SellersProfileType } from "@/types/SellersProfileType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SellersProfileType = {
  id: null,
  profile_picture: null,
  email: null,
  username: null,

  role: null,
  account_type: null,
  phone_number: null,
  country: null,
  bio: null,
  skills: [],
  kycverifications: [],
  awards: [],
  experiences: [],
  educations: [],
  languages: [],
  firstname: null,
  lastname: null,
  name: null,
};

const sellersProfileSlice = createSlice({
  name: "sellersProfile",
  initialState,
  reducers: {
    // updateSellersProfile reducer
    updateSellersProfile: (
      state,
      action: PayloadAction<SellersProfileType>
    ) => {
      return action.payload;
    },
  },
});

export const { updateSellersProfile } = sellersProfileSlice.actions;
export default sellersProfileSlice.reducer;
