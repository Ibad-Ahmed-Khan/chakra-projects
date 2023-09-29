import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import "./Popular.css";

export const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div className="popular-parent">
      <h2>popular recipes</h2>
      <Splide options={{ type: "loop", perPage: 3, autoplay: true }}>
        {popular.map((recipe) => (
          <SplideSlide className="test" key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img className="recipe-img" src={recipe.image} alt={recipe.title} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
