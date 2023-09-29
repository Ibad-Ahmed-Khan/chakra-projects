import React, { useState } from "react";
import "./App.css";
import { Products } from "./data/Products";

function App() {
  const [cart, setCart] = useState(0);

  const increment = (item) => {
    setCart((prevCount) => prevCount + 1);
  };

  const input = (e) => {
    setCart(e.target.value);
  };

  return (
    <div className="parent">
      <div className="products__parent">
        <h1>Products</h1>
        <ul>
          {Products.map((item) => {
            return (
              <li key={item.id}>
                <strong>name:</strong> <br /> {item.name}
                <br />
                <strong>price:</strong>
                <br />
                {item.price}
                <br />
                <button onClick={() => increment(item)}>add to cart</button>
                <input
                  className="items"
                  onChange={input}
                  value={cart}
                  type="number"
                />
                <button
                  disabled={cart == 0}
                  onClick={() => setCart((prevCount) => prevCount - 1)}
                >
                  remove from cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cart__parent">
        <h1>cart</h1>
      </div>
    </div>
  );
}

export default App;
