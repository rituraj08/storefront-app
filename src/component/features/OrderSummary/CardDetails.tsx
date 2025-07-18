import { useSelector } from "react-redux";
import type { CheckoutData } from "../../../types";
const CardDetails = () => {
  const { checkoutData } = useSelector(
    (state: { checkout: { checkoutData: CheckoutData } }) => state.checkout
  );
  const { fullName, email, phoneNumber, creditCardNumber } = checkoutData;

  console.log("checkoutData", checkoutData);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
       
        borderRadius: "5px",
        marginBottom: "20px",
      }}
    >
      <h3 >Card Details</h3>
      <div>
        <p
          style={{
            alignContent: "center",
            fontWeight: "bold",
            // backgroundColor: "black",
            borderRadius: "5px",
            width: "100%",
            height: "50px",
            border: "1px solid lightGrey"
          }}
        >
          Full Name: {fullName}
        </p>
        <p
          style={{
            alignContent: "center",
            fontWeight: "bold",
            // backgroundColor: "black",
            borderRadius: "5px",
            width: "100%",
            border: "1px solid lightGrey",
            height: "50px",
          }}
        >
          Email: {email}
        </p>
        <p
          style={{
            alignContent: "center",
            fontWeight: "bold",
            // backgroundColor: "black",
            borderRadius: "5px",
            width: "100%",
            height: "50px",
            border: "1px solid lightGrey"
          }}
        >
          Phone Number: {phoneNumber}
        </p>
        <p
          style={{
            alignContent: "center",
            fontWeight: "bold",
            // backgroundColor: "black",
            borderRadius: "5px",
            width: "100%",
            height: "50px",
            border: "1px solid lightGrey"
          }}
        >
          Credit Card Number: {creditCardNumber}
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
