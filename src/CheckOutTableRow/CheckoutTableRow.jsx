import React from 'react';
import { ImCross } from 'react-icons/im';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

const CheckoutTableRow = ({ name, imageUrl, price, quantity }) => {
    return (
        <div className='details-row'>
            <span>
                <img className='product' src={imageUrl} alt='' />
            </span>
            <span>{name}</span>
            <span className='quantity'>
                <AiOutlineCaretLeft className='cursor' />
                {quantity}
                <AiOutlineCaretRight className='cursor' />
            </span>
            <span>{price}</span>
            <span>
                <ImCross className='cursor' />
            </span>
        </div>
    );
};

export default CheckoutTableRow;
