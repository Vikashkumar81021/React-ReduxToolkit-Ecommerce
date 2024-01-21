import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";

//create store

export const stroe=configureStore({
    reducer:{
        allCart:cartSlice
    }
})