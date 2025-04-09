import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  {Experience} from "@/types/SellersProfileType";


const initialState: Experience[] = [];
const sellerExperienceSlice = createSlice({
        name: "sellerExperience",
        initialState,
        reducers: {
                updateSellersExperience: (state,  action: PayloadAction<[Experience]>) => {
                      return action.payload;
                    },
               
        }
});
export const { updateSellersExperience } = sellerExperienceSlice.actions;

export default sellerExperienceSlice.reducer;



