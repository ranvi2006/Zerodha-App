import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const bidSlice = createSlice({
    name: "bid",
    initialState,
    reducers: {
        addBid: (state, action) => {
            if (Array.isArray(action.payload)) {
                return action.payload; // Replace state only if valid array
            }
            console.error("Invalid payload for addBid:", action.payload);
            return state; // Keep existing state if payload is invalid
        },
        deleteBid: (state, action) => {
            return state.filter(item => item._id !== action.payload);
        },
    },
});

export const { addBid, deleteBid } = bidSlice.actions;
export default bidSlice.reducer;
