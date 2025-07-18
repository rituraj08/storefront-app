import OrderDetails from "../component/features/Checkout/OrderDetails";
import CardDetails from "../component/features/OrderSummary/CardDetails";
const OrderSummaryScreen = () => {
  return (
    <div>
      <OrderDetails isOrderSummary={true} />
      <CardDetails />
    </div>
  );
};

export default OrderSummaryScreen;
