import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutData } from "../../../store/checkoutSlice";
import { useNavigate } from "react-router-dom";
import type { CheckoutData } from "../../../types";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";
import {
  fullNameValidation,
  emailValidation,
  phoneNumberValidation,
  creditCardNumberValidation,
} from "../../../utils";
const UserDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkoutData } = useSelector(
    (state: { checkout: { checkoutData: CheckoutData } }) => state.checkout
  );
  const [fullName, setFullName] = useState(checkoutData.fullName);
  const [email, setEmail] = useState(checkoutData.email);
  const [phoneNumber, setPhoneNumber] = useState(checkoutData.phoneNumber);
  const [creditCardNumber, setCreditCardNumber] = useState(
    checkoutData.creditCardNumber
  );

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [creditCardNumberError, setCreditCardNumberError] = useState("");

  const fullNameValidationHandler = () => {
    const isValid = fullNameValidation(fullName);
    setFullNameError(isValid ? "" : "Full name should contain only alphabets");
    return isValid;
  };

  const emailValidationHandler = () => {
    const isValid = emailValidation(email);
    setEmailError(isValid ? "" : "Email should be valid");
    return isValid;
  };

  const phoneNumberValidationHandler = () => {
    const isValid = phoneNumberValidation(phoneNumber);
    setPhoneNumberError(isValid ? "" : "Phone number should be valid");
    return isValid;
  };

  const creditCardNumberValidationHandler = () => {
    const isValid = creditCardNumberValidation(creditCardNumber);
    setCreditCardNumberError(
      isValid ? "" : "Credit card number should be valid"
    );
    return isValid;
  };

  const checkoutHandler = () => {
    const isValidFullName = fullNameValidationHandler();
    const isValidEmail = emailValidationHandler();
    const isValidPhoneNumber = phoneNumberValidationHandler();
    const isValidCreditCardNumber = creditCardNumberValidationHandler();

    console.log("isValidFullName", isValidFullName);
    console.log("isValidEmail", isValidEmail);
    console.log("isValidPhoneNumber", isValidPhoneNumber);
    console.log("isValidCreditCardNumber", isValidCreditCardNumber);

    if (
      isValidFullName &&
      isValidEmail &&
      isValidPhoneNumber &&
      isValidCreditCardNumber
    ) {
      dispatch(
        setCheckoutData({
          fullName,
          email,
          phoneNumber,
          creditCardNumber,
        } as CheckoutData)
      );
      navigate("/OrderSummary");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        margin: "auto",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
          fullNameValidationHandler();
        }}
        placeholder={"Full Name"}
      />
      {fullNameError && <span style={{ color: "red" }}>{fullNameError}</span>}
      <TextInput
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          emailValidationHandler();
        }}
        placeholder={"Email"}
      />
      {emailError && <span style={{ color: "red" }}>{emailError}</span>}
      <TextInput
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
          phoneNumberValidationHandler();
        }}
        placeholder={"Phone Number"}
      />
      {phoneNumberError && (
        <span style={{ color: "red" }}>{phoneNumberError}</span>
      )}
      <TextInput
        value={creditCardNumber}
        onChange={(e) => {
          setCreditCardNumber(e.target.value);
          creditCardNumberValidationHandler();
        }}
        placeholder={"Credit Card Number"}
      />
      {creditCardNumberError && (
        <span style={{ color: "red" }}>{creditCardNumberError}</span>
      )}

      <Button text="Checkout" onClick={checkoutHandler} width="300px" />
    </div>
  );
};
export default UserDetails;
