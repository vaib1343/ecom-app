import "./Shop.scss";
import React, { Fragment, useContext } from "react";
import { categoriesContext } from "../../context/categoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
const Shop = () => {
    const { categoriesMap } = useContext(categoriesContext);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
