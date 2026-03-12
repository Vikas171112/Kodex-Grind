import React from "react";
import ProductCard from "../../components/organism/ProductCard/ProductCard";
import "./ProductsPage.css";

function ProductPage() {
  const products = [
    {
      id: 1,
      name: "Sony Headphones",
      category: "Electronics",
      price: 9999,
      image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      name: "iPhone 14",
      category: "Electronics",
      price: 79999,
      image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg",
    },
    {
      id: 3,
      name: "Nike Shoes",
      category: "Fashion",
      price: 5999,
      image:
        "https://static.nike.com/a/images/t_default/0b4c7b0f-1f2c-4a1a-9b21-7e7b9b2e2e5c/air-max-270-shoes-KkLcGR.png",
    },
  ];

  return (
    <>
      <div className="container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductPage;
