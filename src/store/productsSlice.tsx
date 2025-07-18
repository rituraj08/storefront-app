import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types";

interface ProductsState {
  currentIndex: number;
  limit: number;
  products: Product[];
  filteredProducts: Product[];
  searchProductsList: Product[];
}


const initialState: ProductsState = {
  currentIndex: 0,
  limit: 10,
  products: [],
  filteredProducts: [],
  searchProductsList: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload.slice(state.currentIndex, state.currentIndex+state.limit);
    },
    setFilterByPrice: (state, action) => {
      const {value} = action.payload;
      console.log("value type", typeof value);
      if(value ===  "1"){
        state.filteredProducts = [...state.products].slice(state.currentIndex, state.currentIndex+state.limit).sort(
          (a, b) => a.price - b.price
        );
      }else if(value === "2"){
        state.filteredProducts = [...state.products].slice(state.currentIndex, state.currentIndex+state.limit).sort(
          (a, b) => b.price - a.price
        );
      }
      console.log("filteredProducts", state.filteredProducts);
    },
    setFilterByRatings: (state, action) => {
        const {value} = action.payload;
        const filteredProducts = state.products.slice(state.currentIndex, state.currentIndex+state.limit).filter((item) => {
          const rating = Math.floor(item?.rating || 0);
          return rating === (value);
        });
        state.filteredProducts = filteredProducts;
      },
    setFilterByAlphabets: (state, action) => {
     
      const { value} = action.payload;
     
      if(value === "1"){
        state.filteredProducts = [...state.products].slice(state.currentIndex, state.currentIndex+state.limit).sort((a, b) =>
            a.title.localeCompare(b.title)  
        );
      }else if(value === "2"){
        state.filteredProducts = [...state.products].slice(state.currentIndex, state.currentIndex+state.limit).sort((a, b) =>
            b.title.localeCompare(a.title)
        );
      }
      console.log("filteredProducts", state.filteredProducts);
    },
    searchProducts: (state, action) => {
      const {value} = action.payload;
      if(value.trim() === ""){
        state.searchProductsList = [];
        return;
      }
      state.searchProductsList = state.products.slice(state.currentIndex, state.currentIndex+state.limit).filter((item) => {
        return item.title.toLowerCase().includes(value.trim().toLowerCase());
      });
      console.log("searchProductsList", state.searchProductsList);
    },
    loadMoreProducts: (state, action) => {
      const { type } = action.payload;
      const { products, limit, currentIndex } = state;
    
      if (type === "down") {
        const newStart = currentIndex + limit;
        const newEnd = newStart + limit;
    
        // Don't overflow
        if (newEnd <= products.length) {
          state.currentIndex = newStart;
          state.filteredProducts = products.slice(newStart, newEnd);
        }
      } else if (type === "up") {
        const newStart = Math.max(currentIndex - limit, 0);
        const newEnd = newStart + limit;
    
        // Don't go below 0
        if (newStart < currentIndex) {
          state.currentIndex = newStart;
          state.filteredProducts = products.slice(newStart, newEnd);
        }
      }
    }
    
  },
});

export const {
  setProducts,
  setFilterByPrice,
  setFilterByRatings,
  setFilterByAlphabets,
  searchProducts,
  loadMoreProducts
} = productsSlice.actions;
export default productsSlice.reducer;
