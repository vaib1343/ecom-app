import React from 'react';
import './CartItem.scss';

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span>
                    {quantity} x {price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
