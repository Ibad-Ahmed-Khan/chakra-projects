import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="parent">
      <h1>slide me</h1>
      <Splide
        className="splide"
        options={{
          type: "loop",
          perPage: 3,
          autoplay: true,
          interval: 3500,
          pauseOnHover: true,
          gap: "1rem",
          cover: true,
          height: "300px",
          arrows: false,
          focus: "center",
        }}
      >
        {products.slice(0, 15).map((item) => (
          <SplideSlide key={item.id}>
            <div className="items">
              <p className="product-title">{item.title}</p>
              <img className="product-img" src={item.image} alt={item.title} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default App;
