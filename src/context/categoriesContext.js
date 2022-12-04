import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebaseUtils";
import SHOP_DATA from "../shop-data.js";

export const categoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        // addDocumentAndCollection('categories', SHOP_DATA)
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocument();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = {
        categoriesMap,
    };
    return (
        <categoriesContext.Provider value={value}>
            {children}
        </categoriesContext.Provider>
    );
};
