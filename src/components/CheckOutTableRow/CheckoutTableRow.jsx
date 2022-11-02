import React from 'react';
import { ImCross } from 'react-icons/im';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './CheckoutTableRow.scss';

const CheckoutTableRow = ({ product }) => {
    const { removeItemFromCart, addItemToCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = product;

    const handleIncrement = () => {
        addItemToCart(product);
    };

    const handleDecrement = () => {
        removeItemFromCart(product, 1);
    };

    const handleRemove = () => {
        removeItemFromCart(product, 'all');
    };
    
    return (
        <div className='details-row'>
            <span>
                <img className='product' src={imageUrl} alt='' />
            </span>
            <span>{name}</span>
            <span className='quantity'>
                <AiOutlineCaretLeft className='cursor' onClick={() => handleDecrement()} />
                {quantity}
                <AiOutlineCaretRight className='cursor' onClick={() => handleIncrement()} />
            </span>
            <span>{price}</span>
            <span>
                <ImCross className='cursor' onClick={handleRemove} />
            </span>
        </div>
    );
};

export default CheckoutTableRow;
