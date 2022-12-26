import React, { useContext, useState } from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/bag.svg';
import { ShoppingBagIcon, ItemCount, CartIconContainer } from './CartIcon.styles';
import CartDropdown from '../CartDropdown/CartDropdown';
import { CartContext } from '../../context/cartContext';

const CartIcon = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <CartIconContainer>
            <ShoppingBagIcon />
            <ItemCount>{cartItems.length}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
