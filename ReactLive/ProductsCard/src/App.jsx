import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import ProductCard from "./components/organism/ProductCard/ProductCard";
import ProductPage from "./pages/ProductsPage/ProductPage";

function App() {
  return (
    <>
      <ProductPage />
    </>
  );
}

export default App;
