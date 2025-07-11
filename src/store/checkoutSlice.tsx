import { createSlice } from "@reduxjs/toolkit";
import type { CheckoutData } from "../types";
const checkoutSlice = createSlice({
    name: "checkout",
    initialState:{
        checkoutData:{
            fullName: "",
            email: "",
            phoneNumber: "",
            creditCardNumber: "",
        } as CheckoutData
    },
    reducers:{
        setCheckoutData:(state, action)=>{
            state.checkoutData = action.payload;
        }
    }
});

export const {setCheckoutData} = checkoutSlice.actions;
export default checkoutSlice.reducer;
        
    