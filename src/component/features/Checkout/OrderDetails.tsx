import { useSelector } from "react-redux";
import type { Product, CartItems } from "../../../types";
const OrderDetails = ({ isOrderSummary }: { isOrderSummary?: boolean }) => {
  const { cartItems } = useSelector(
    (state: { cart: { cartItems: CartItems } }) => state.cart
  );
  const { products } = useSelector(
    (state: { products: { products: Product[] } }) => state.products
  );

  const getTotalAmount = (): number => {
    const totalAmount = Object.entries(cartItems).reduce(
      (acc, [id, quantity]) => {
        const item = products.find((product) => product.id === Number(id));
        acc += quantity * (item?.price ?? 0);
        return acc;
      },
      0
    );

    console.log("totalAmount : ", totalAmount);

    return totalAmount;
  };

  getTotalAmount();

  console.log("cartItems", cartItems);
  console.log("products", products);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "rgb(188, 109, 12)",
        marginBottom: "20px",
      }}
    >
      <h3>Order Details</h3>
      {Object.entries(cartItems).map(([id, quantity]) => (
        <div key={id}>
          <p style={{ color: "gold", fontWeight: "bold" }}>
            {
              products.find(
                (product: Product | undefined) => product?.id === Number(id)
              )?.title
            }
          </p>
          <p style={{ fontWeight: "bold" }}>
            {(products.find(
              (product: Product | undefined) => product?.id === Number(id)
            )?.price ?? 0) * quantity}
          </p>
        </div>
      ))}
      {isOrderSummary && (
        <p style={{ color: "gold", fontWeight: "bold" }}>
          Total Amount: {getTotalAmount()}
        </p>
      )}
    </div>
  );
};

export default OrderDetails;
