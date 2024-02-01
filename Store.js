import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice"
import restaurantReducer from "./features/restaurantSlice"

export const store = configureStore({
    reducer:{
        basket:basketReducer,   //we combine together to make and connect the basket to overall global store

        restaurant:restaurantReducer
    },
});