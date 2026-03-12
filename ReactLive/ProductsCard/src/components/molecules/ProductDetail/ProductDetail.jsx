import React from "react";
import "./ProductDetail.css";

function ProductDetail({ product }) {
  return (
    <div className="Product">
      <img alt={product.name} src={product.image} />
      <h2>{product.name}</h2>
      <p className="category">{product.category}</p>
      <h3>₹{product.price}</h3>
    </div>
  );
}

export default ProductDetail;
