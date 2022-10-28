import './CheckOutTable.scss';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CheckoutTableRow from '../../CheckOutTableRow/CheckoutTableRow';

const CheckOutTable = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='heading'>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            {cartItems.map((product) => (
                <CheckoutTableRow key={product.id} {...product} />
            ))}
        </div>
    );
};

export default CheckOutTable;
