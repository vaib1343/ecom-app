import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/userContext";
import { CategoriesProvider } from "./context/categoriesContext";
import { CartProvider } from "./context/cartContext";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripeUtils";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {

}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                        <Elements stripe={stripePromise}>
                            <App />
                        </Elements>
                    </CartProvider>
                </CategoriesProvider>
                <ToastContainer />
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
