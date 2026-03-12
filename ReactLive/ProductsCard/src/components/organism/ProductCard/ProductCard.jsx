import React from "react";
import "./ProductCard.css";
import ProductDetail from "../../molecules/ProductDetail/ProductDetail";
import Button from "../../atoms/Button/Button";

function ProductCard({ product }) {
  console.log(product);
  return (
    <div className="card">
      <ProductDetail product={product} />
      <Button>Add to Cart</Button>
    </div>
  );
}

export default ProductCard;
