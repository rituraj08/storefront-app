import { useSelector } from "react-redux";
import type { CheckoutData } from "../../types";
const CardDetails = () => {

    const {checkoutData} = useSelector((state: {checkout : {checkoutData : CheckoutData}}) => state.checkout);
    const {fullName, email, phoneNumber, creditCardNumber} = checkoutData;

    console.log("checkoutData", checkoutData)
    return (
        <div style={{border: "1px solid #ccc", padding: "10px", borderRadius: "5px", backgroundColor: "gray", marginBottom: "20px"}}>
            <h3>Card Details</h3>
                <div>
                    <p style={{ alignContent: "center", fontWeight: "bold", backgroundColor: "black", borderRadius: "5px" , width: "100%", height: "50px" }}>Full Name: {fullName}</p>
                    <p style={{ alignContent: "center", fontWeight: "bold", backgroundColor: "black", borderRadius: "5px" , width: "100%", height: "50px" }}>Email: {email}</p>
                    <p style={{ alignContent: "center", fontWeight: "bold", backgroundColor: "black", borderRadius: "5px" , width: "100%", height: "50px" }}>Phone Number: {phoneNumber}</p>
                    <p style={{ alignContent: "center", fontWeight: "bold", backgroundColor: "black", borderRadius: "5px" , width: "100%", height: "50px" }}>Credit Card Number: {creditCardNumber}</p>
                </div>
          
        </div>
    )
}

export default CardDetails