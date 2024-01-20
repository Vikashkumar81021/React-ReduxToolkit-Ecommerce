import {createSlice} from '@reduxjs/toolkit'

const initialState={
    carts:[]
};

const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
     reducers:{
        //add to cart
        addtoCart:(state,action)=>{

        }
     }
})
