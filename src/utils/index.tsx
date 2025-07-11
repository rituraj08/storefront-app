import type { CartItem } from "../types";
import type { Product } from "../types";
export const price = {
  type: "Filter by Price",
  list: [
    { id: 1, title: "Low to High" },
    { id: 2, title: "High to Low" },
  ],
};
export const rating = {
  type: "Filter by Rating",
  list: [
    { id: 1, title: "Star 1" },
    { id: 2, title: "Star 2" },
    { id: 3, title: "Star 3" },
    { id: 4, title: "Star 4" },
    { id: 5, title: "Star 5" },
  ],
};
export const aplphabetically = {
  type: "Filter Alphabetically",
  list: [
    { id: 1, title: "A to Z" },
    { id: 2, title: "Z to A" },
  ],
};

export const debounce = (func: Function, delay: number) => {
  let timeout: number;
  return function (...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

export const throttle = (func: Function, delay: number) => {
  let flag = true;
  return function (...args: any) {
    if (flag) {
      func.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
    

 export const fullNameValidation = (fullName: string) => {
    const isValid = RegExp("^[a-zA-Z ]+$").test(fullName);
    return isValid;
  };

  export const emailValidation = (email: string) => {
    const isValid = RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$").test(email);
    return isValid;
  };
    

  export const phoneNumberValidation = (phoneNumber: string) => {
    const isValid = RegExp("^[0-9]{10}$").test(phoneNumber);
    return isValid;
  };
    

  export const creditCardNumberValidation = (creditCardNumber: string) => {
    const isValid = RegExp("^[0-9]{16}$").test(creditCardNumber);
    return isValid;
  };

  export const getTotalAmount = (cartItems: CartItem, products: Product[]) =>{

    const x = Object.entries(cartItems).reduce((acc, [id, quantity]) =>  {
         const item = products.find((product: Product | undefined) => product?.id === Number(id))
         acc +=  quantity * (item?.price ?? 0);
         return acc;
     }, 0 );

     console.log('x : ', x);

     return x;
 }
    
    
