import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phoneNo: null,
    name: null,
    email: null,
    hashPassword: null,
    userId: null,
    totalFunds: 0,
    userMargin: 0,
    avlMargin: 0,
    orders:[],
    bids: [],
    shares: [],
    watchList: [],
    bank: {
        holderName: null,
        accountNumber: null,
        idfc: null
    },
    adharCard: {
        name: null,
        number: null,
        dob: null
    },
    panCard: {
        name: null,
        number: null,
        dob: null
    },
    isDone: false,
    createdAt: "",
    updatedAt: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Function to update the state based on the data sent
        updateUser: (state, action) => {
            const { payload } = action;

            for (let key in payload) {
                if (state.hasOwnProperty(key)) {
                    if (typeof state[key] === "object" && state[key] !== null) {
                        state[key] = { ...state[key], ...payload[key] }; // Merge objects instead of replacing them
                    } else {
                        state[key] = payload[key];
                    }
                }
            }
        },

        // Function to reset state to initial values
        resetUser: () => initialState
    }
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
