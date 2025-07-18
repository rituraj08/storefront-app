export interface Product {
    id: number,
    price: number,
    rating: number,
    category: string,
    description: string,
    images: string[],
    title: string
}

export interface RootState {
  products: {
    currentIndex: number;
    limit: number;
    products: Product[];
    filteredProducts: Product[];
    searchProductsList: Product[];
  };
}

export interface ProductScreenProps {
    currentIndex: number,
    limit: number,
    products: Product[],
    filteredProducts: Product[],
    searchProductsList: Product[]
}

export interface CheckoutData{
    fullName: string,
    email: string,
    phoneNumber: string,
    creditCardNumber: string
}

export interface CartItems{
    id: number,
    quantity: number
}