import OrderDetails from "../Checkout/OrderDetails"
import CardDetails from "./CardDetails"
const OrderSummary = () => {
    
    return (
        <div>
            <h1>Order Summary</h1>
            <OrderDetails isOrderSummary={true}/>
            <CardDetails/>
        </div>
    )
}   

export default OrderSummary