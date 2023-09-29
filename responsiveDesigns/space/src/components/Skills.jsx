import React from "react";

import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-inner">
        <h1>skills</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, magnam
          illum libero asperiores nam qui tempora magni officiis officia et
          laborum sed aliquam in dolore porro fugit incidunt nostrum nesciunt!
        </p>
        <div className="slider">
          <Splide
            options={{
              type: "slide",
              perPage: 3,
              autoplay: true,
              pauseOnHover: true,
              interval: 2000,
              arrows: false,
              pagination: true,
              gap: "0rem",
              drag: true,

              breakpoints: {
                600: {
                  perPage: 1,
                },
                1000: {
                  perPage: 2,
                },
              },
            }}
          >
            <SplideSlide>
              <span className="span-circle">
                <p>10%</p>
              </span>
              <h2>web development</h2>
            </SplideSlide>
            <SplideSlide>
              <span className="span-circle">
                <p>20%</p>
              </span>
              <h2>web series</h2>
            </SplideSlide>
            <SplideSlide>
              <span className="span-circle">
                <p>30%</p>
              </span>
              <h2>web test</h2>
            </SplideSlide>
            <SplideSlide>
              <span className="span-circle">
                <p>40%</p>
              </span>
              <h2>web love</h2>
            </SplideSlide>
            <SplideSlide>
              <span className="span-circle">
                <p>50%</p>
              </span>
              <h2>web coding</h2>
            </SplideSlide>
            <SplideSlide>
              <span className="span-circle">
                <p>60%</p>
              </span>
              <h2>web skills</h2>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};
