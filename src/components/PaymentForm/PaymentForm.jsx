import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
    PaymentFormContainer,
    FormContainer,
    ButtonContainer,
} from "./PaymentForm.styles";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cartContext";
import Button from "../Button/Button";

const PaymentForm = () => {
    const { currentUser } = useContext(UserContext);
    const { cartTotal } = useContext(CartContext);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);

        const response = await fetch(
            "/.netlify/functions/create-payment-intent",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: cartTotal,
                }),
            }
        ).then((res) => res.json());

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser?.displayName || currentUser?.email,
                },
            },
        });
        setIsProcessingPayment(false);
        if (paymentResult.error) {
            toast.error(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                toast.success("Payment Successful");
            }
        }
    };
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <ButtonContainer>
                    <Button
                        type="submit"
                        buttonType="inverted"
                        disabled={isProcessingPayment}
                    >
                        {isProcessingPayment ? "Under Process" : "Pay Now"}
                    </Button>
                </ButtonContainer>
            </FormContainer>
        </PaymentFormContainer>
    );
};

export default PaymentForm;
