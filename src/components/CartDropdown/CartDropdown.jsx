import React, { useContext } from 'react';
import './CartDropdown.scss';
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
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {!!cartItems.length ? (
                    cartItems.map((product) => {
                        return <CartItem key={product.id} cartItem={product} />;
                    })
                ) : (
                    <span className='empty-message'>No Item added</span>
                )}
                {}
            </div>
            <div>
                <Button onClick={handleCheckout}>CHECKOUT</Button>
            </div>
        </div>
    );
};

export default CartDropdown;
