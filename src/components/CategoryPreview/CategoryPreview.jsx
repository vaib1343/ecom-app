import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.scss';

function CategoryPreview({ title, products }) {
    console.log({ products });
    return (
        <div className='category-preview'>
            <h2 className='title'>
                <span>
                    <Link to={`${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
                </span>
            </h2>
            <div className='preview'>
                {products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </div>
    );
}

export default CategoryPreview;
