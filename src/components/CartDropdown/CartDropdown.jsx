import React, { useContext } from 'react';
import './CartDropdown.scss';
import Button from '../Button/Button';
import { CartContext } from '../../context/cartContext';
import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    !!cartItems.length ? cartItems.map((product) => {
                        return <CartItem key={product.id} cartItem={product} />;
                    }) : <span className='empty-message'>No Item added</span>
                }
                {}
            </div>
            <div>
                <Button>CHECKOUT</Button>
            </div>
        </div>
    );
};

export default CartDropdown;
