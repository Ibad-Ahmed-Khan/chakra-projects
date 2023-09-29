import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, productName, price } = props.data;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product">
      <h1>{id} </h1>
      <p>{productName} </p>
      <p>{price} </p>
      <button className="btn" onClick={() => addToCart(id)}>
        add to cart
      </button>
    </div>
  );
};

export default Product;
