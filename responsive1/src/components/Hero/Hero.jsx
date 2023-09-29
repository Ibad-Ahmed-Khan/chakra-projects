import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <div className="block">
          <h1>discover most suitable property</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            obcaecati cum molestias eum. Nostrum officiis repellendus excepturi
            ratione iste id!
          </p>
        </div>
        <div className="hero__block">
          <input className="search" type="search" />
          <button>search</button>
        </div>
        <div className="hero__count">
          <div className="count">
            <div className="count__top">
              <span>9000</span> <span> +</span>
            </div>
            <span className="count__bottom">premium products</span>
          </div>
          <div className="count">
            <div className="count__top">
              <span>2000</span> <span> +</span>
            </div>
            <span className="count__bottom">happy customer</span>
          </div>
          <div className="count">
            <div className="count__top">
              <span>28</span> <span> +</span>
            </div>
            <span className="count__bottom">awards winning</span>
          </div>
        </div>
      </div>
      <div className="hero__right"></div>
    </section>
  );
};

export default Hero;
