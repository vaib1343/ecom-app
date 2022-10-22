import './CategoryItem.scss';
import React from 'react';

const CategoryItem = ({ imageUrl, title }) => {
    return (
        <div className='category-container'>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    );
};

export default CategoryItem;
