import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {  _id:"67efa6c5d0c6ce29177f4abc",
        shareName:"HDFCBANK",
        isBse:true,
        percentage:-6.05,
        profitPercentage:-0.35,
        isUp:false,
        price:1705.80
      },{shareName:"INFY",
        _id:"67efa6c5d0c6ce29177f4abd",
        isBse:false,
        percentage:-11.00,
        profitPercentage:-0.69,
        isUp:false,
        price:1579.85
      },{_id:"67efa6c5d0c6ce29177f4abe",
        shareName:"TCS",
        isBse:true,
        percentage:-8.75,
        profitPercentage:-0.35,
        isUp:true,
        price:3512.35
      },{
        _id:"67efa6c5d0c6ce29177f4abf",
        shareName:"ONGC",
        isBse:false,
        percentage:0.62,
        profitPercentage:0.28,
        isUp:true,
        price:225.02
      },{
        _id:"67efa6c5d0c6ce29177f4ac0",
        shareName:"HINDUNILVR",
        isBse:true,
        percentage:-17.00,
        profitPercentage:-0.78,
        isUp:false,
        price:2175.85
      },{
        _id:"67efa6c5d0c6ce29177f4ac1",
        shareName:"GOLDBEES",
        isBse:false,
        percentage:-0.50,
        profitPercentage:-0.69,
        isUp:true,
        price:72.82
      }
]

export const watchlistSlice=createSlice({
    name:"watchlist",
    initialState,
    reducers:{
        addWatchList: (state, action) => {
            action.payload.forEach(newItem => {
                // Check if item already exists in state (by _id)
                const exists = state.some(item => item._id === newItem._id);
                if (!exists) {
                    state.push(newItem); // Only push if it's not a duplicate
                }
            });
        },
        deleteWatchList: (state, action) => {
            // Remove the item with the given _id
            return state.filter(item => item._id !== action.payload);
        },
    }
});

export const {addWatchList,deleteWatchList}=watchlistSlice.actions;
export default watchlistSlice.reducer;


