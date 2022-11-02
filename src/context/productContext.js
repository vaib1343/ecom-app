import { createContext, useEffect, useState } from 'react';
import { addDocumentAndCollection } from '../utils/firebase/firebaseUtils';
import SHOP_DATA from '../shop-data.js';

export const ProductContext = createContext({
    products: [],
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        addDocumentAndCollection('categories', SHOP_DATA)
    },[])

    const value = {
        products,
    };
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
