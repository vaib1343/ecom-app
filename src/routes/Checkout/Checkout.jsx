import React, { useContext } from "react";
import CheckOutTable from "../../components/CheckOutTable/CheckOutTable";
import "./Checkout.scss";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import { CartContext } from "../../context/cartContext";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="checkout-container">
            <CheckOutTable />
            {!!cartItems.length && <PaymentForm />}
        </div>
    );
};

export default Checkout;
