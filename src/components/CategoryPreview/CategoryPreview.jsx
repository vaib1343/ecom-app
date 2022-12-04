import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPreview.scss";

function CategoryPreview({ title, products }) {
    console.log({ products });
    return (
        <div className="category-preview">
            <h2 className="title">
                <span>{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
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
