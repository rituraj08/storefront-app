import { setProducts } from "../store/productsSlice";
import type { AppDispatch } from "../store/appStore";
export const fetchProduct = () => async (dispatch: AppDispatch ) : Promise<void> => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    dispatch(setProducts(data.products));
  } catch (error) {
    console.log(error);
  }
};