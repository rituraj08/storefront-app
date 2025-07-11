import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import checkoutReducer from "./checkoutSlice";

const appStore = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
    }
});

export type AppDispatch = typeof appStore.dispatch;

export default appStore;