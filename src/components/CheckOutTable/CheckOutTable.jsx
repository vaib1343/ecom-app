import './CheckOutTable.scss';
import React, { Fragment, useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CheckoutTableRow from '../../CheckOutTableRow/CheckoutTableRow';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const CheckOutTable = () => {
    const navigate = useNavigate();
    const { cartItems, cartTotal } = useContext(CartContext);

    let render;
    if (cartItems.length) {
        render = cartItems.map((product) => <CheckoutTableRow key={product.id} product={product} />);
    } else {
        render = (
            <div className='no-item'>
                <h2>ADD ITEM TO CART</h2>
                <Button onClick={() => navigate('/shop')}>SHOP NOW</Button>
            </div>
        );
    }
    
    return (
        <Fragment>
            <div className='heading'>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <div>{render}</div>
            <div className='price-container'>
                <h4>Total:</h4>
                <p>{cartTotal}</p>
            </div>
        </Fragment>
    );
};

export default CheckOutTable;
