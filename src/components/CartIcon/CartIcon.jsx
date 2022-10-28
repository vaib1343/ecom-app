import './CartIcon.scss';
import React, { useContext, useState } from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/bag.svg';
import './CartIcon.scss';
import CartDropdown from '../CartDropdown/CartDropdown';
import { CartContext } from '../../context/cartContext';

const CartIcon = () => {
    const {cartItems} = useContext(CartContext)
    return (
        <div className='cart-icon-container'>
            <ShoppingBag className='icon-shopping' />
            <span className='item-count'>{cartItems.length}</span>
        </div>
    );
};

export default CartIcon;
