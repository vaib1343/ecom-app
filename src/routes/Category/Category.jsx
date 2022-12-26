import './Category.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { categoriesContext } from '../../context/categoriesContext';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

function Category() {
    const { category } = useParams();
    const { categoriesMap } = useContext(categoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <div>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>{products && products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </div>
    );
}

export default Category;
