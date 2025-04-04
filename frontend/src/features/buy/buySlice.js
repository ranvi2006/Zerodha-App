import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 
        isBuy:false,
        buy: []
    
};

export const buySlice = createSlice({
    name: "buy",
    initialState,
    reducers: {
        activeBuy: (state,action) => {
            return {
                isBuy: true,
                buy: action.payload
            }
        },
        cencelBuy: (state, payload) => {
            return {
                isBuy: false,
                buy: []
            }
        }
    }
});

export const {activeBuy,cencelBuy}=buySlice.actions;
export default buySlice.reducer;