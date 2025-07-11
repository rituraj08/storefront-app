
import { useSelector } from "react-redux";
import UserDetails from "./UserDetails";;
import OrderDetails from "./OrderDetails";
const Checkout = () =>{
    
   

    return (
        <div>

 <OrderDetails/>
 <UserDetails/>

        </div>
       
        
    )


}

export default Checkout;