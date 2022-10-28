import './Shop.scss';
import React, { Fragment, useContext } from 'react';
import { ProductContext } from '../../context/productContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className='products-container'>
            {products.map((product) => {
                return <ProductCard product={product} key={product.id} />;
            })}
        </div>
    );
};

export default Shop;
