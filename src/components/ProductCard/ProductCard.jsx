import './ProductCard.scss';
import React, { useContext } from 'react';
import Button from '../Button/Button';
import { CartContext } from '../../context/cartContext';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`product - ${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={() => addItemToCart(product)}>
                ADD TO CART
            </Button>
        </div>
    );
};

export default ProductCard;
