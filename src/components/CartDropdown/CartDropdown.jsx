import React, { useContext } from 'react';
import { CartDropdownContainer, EmptyMessage, CartItems } from './CartDropdown.styles.js';
import Button from '../Button/Button';
import { CartContext } from '../../context/cartContext';
import CartItem from '../CartItem/CartItem';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();
    const handleCheckout = () => {
        if (!cartItems.length) {
            toast.info('Add items before checking out');
            return;
        }
        navigate('/checkout');
        setIsCartOpen(false);
    };
    return (
        <CartDropdownContainer>
            <CartItems>
                {!!cartItems.length ? (
                    cartItems.map((product) => {
                        return <CartItem key={product.id} cartItem={product} />;
                    })
                ) : (
                    // <span className='empty-message'>No Item added</span>
                    <EmptyMessage>No Item added</EmptyMessage>
                )}
            </CartItems>
            <div>
                <Button onClick={handleCheckout}>CHECKOUT</Button>
            </div>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
