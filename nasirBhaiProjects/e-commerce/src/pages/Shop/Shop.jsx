import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1>pedrotech shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
