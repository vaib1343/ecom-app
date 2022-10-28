import { createContext, useState } from 'react';
import SHOPDATA from '../shop-data.json';

export const ProductContext = createContext({
    products: [],
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(SHOPDATA);
    const value = {
        products,
    };
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
