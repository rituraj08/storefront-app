import { createSlice } from "@reduxjs/toolkit";
import type { CartItems } from "../types";
const cartSlice = createSlice({
    name: "cart",
    initialState:{  
        cartItems: {} as CartItems  
    },
    reducers:{
        addToCart:(state, action)=>{
            console.log("action.payload", action.payload);
            const id = action.payload;
            console.log("id", id);
            if(state.cartItems[id])
                state.cartItems[id] += 1;
            else
                state.cartItems[id] = 1;
            console.log("cartItems", state.cartItems);
        },
        removeFromCart:(state, action)=>{
            const id = action.payload.id;
            delete state.cartItems[id];
        }
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;