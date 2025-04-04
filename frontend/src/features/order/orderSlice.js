import { createSlice } from "@reduxjs/toolkit";

const initialState=[

];

 export const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{
        addOrder: (state, action) => {
           if(state.length==0)
           {
            action.payload.forEach(newItem => {
                // Find the existing item in state
                const existingItem = state.find(item => item._id === newItem._id);
        
                if (existingItem) {
                    // ✅ Update quantity of the existing item
                    existingItem.quantity += 1;
                } else {
                    // ✅ Add new item with quantity 1
                    state.push({ ...newItem, quantity: 1 });
                }
            });
           }
        },
        deleteOrder: (state, action) => {
            // Remove the item with the given _id
            return state.filter(item => item._id !== action.payload);
        },
    }
});

export const {addOrder,deleteOrder}=orderSlice.actions;
export default orderSlice.reducer;