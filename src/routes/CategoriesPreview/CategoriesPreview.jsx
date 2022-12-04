import React, { Fragment, useContext } from "react";
import { categoriesContext } from "../../context/categoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(categoriesContext);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const product = categoriesMap[title];
                return <CategoryPreview title={title} products={product} />;
            })}
        </Fragment>
    );
};

export default CategoriesPreview;
