import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"
import watchlistReducer from "../features/watchlist/watchlistSlice";
import orderReducer from "../features/order/orderSlice"
import bidReducer from "../features/bid/bidSlice"
import buyReducer from "../features/buy/buySlice"
const store=configureStore({
    reducer:{
        user:userReducer,
        watchlist:watchlistReducer,
        bid:bidReducer,
        order:orderReducer,
        buy:buyReducer

    },
});

export default store;