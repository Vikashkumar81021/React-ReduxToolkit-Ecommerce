import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    //add to cart
    addtoCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp  = { ...action.payload, qnty: 1 };
        //add data in carts
        state.carts = [...state.carts,temp ];
      }
    },
    removeToCart:(state,action)=>{
    const data=state.carts.filter((ele)=>ele.id !== action.payload);
    state.carts=data
    },
    //remove singleItem
    removeSingleItem:(state,action)=>{
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if(state.carts[itemIndex_dec].qnty>=1){
        state.carts[itemIndex_dec].qnty -=1
      }
    },
    //clear cartItem
    emptycartItem:(state,action)=>{
     state.carts=[]
    }
  },
});

export const { addtoCart,removeToCart,removeSingleItem,emptycartItem } = cartSlice.actions;
export default cartSlice.reducer;
