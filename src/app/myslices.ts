import { createSlice } from "@reduxjs/toolkit";


const sellerNavbarSlice=createSlice({
        name: "sellerNavbar",
        initialState: {
            currentPage: 'dashboard',
        },
        reducers: {
                setCurrentPage: (state, action) => {
                        state.currentPage = action.payload;
                },
        },
});

export const { setCurrentPage } = sellerNavbarSlice.actions;
export default sellerNavbarSlice.reducer;