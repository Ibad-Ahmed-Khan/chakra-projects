import React, { useState } from "react";
import "./About.css";
import "../pages.css";

export const About = () => {
  const [isClicked, setIsClicked] = useState([]);

  const colappse = (i) => {
    const newState = [...isClicked];
    newState[i] = !newState[i];
    setIsClicked(newState);
  };

  return (
    <div className="About-parent container">
      <h2 className=" title">about</h2>
      <div className="about__left">
        <div className="pair">
          <p onClick={() => colappse(0)} className="grey">
            We Have Free Templates For Everyone
          </p>
          <p
            style={{
              display: isClicked[0] ? "block" : "none",
            }}
          >
            Our website templates are created with inspiration, checked for
            quality and originality and meticulously sliced and coded. What's
            more, they're absolutely free! You can do a lot with them. You can
            modify them. You can use them to design websites for clients, so
            long as you agree with the Terms of Use. You can even remove all our
            links if you want to.
          </p>
        </div>
        <div className="pair">
          <p onClick={() => colappse(1)} className="grey">
            We Have More Templates For You
          </p>
          <p
            style={{
              display: isClicked[1] ? "block" : "none",
            }}
          >
            Looking for more templates? Just browse through all our Free Website
            Templates and find what you're looking for. But if you don't find
            any website template you can use, you can try our Free Web Design
            service and tell us all about it. Maybe you're looking for something
            different, something special. And we love the challenge of doing
            something different and something special.
          </p>
        </div>
        <div className="pair">
          <p onClick={() => colappse(3)} className="grey">
            Be Part Of Our Community
          </p>
          <p
            style={{
              display: isClicked[3] ? "block" : "none",
            }}
          >
            If you're experiencing issues and concerns about this website
            template, join the discussion on our forum and meet other people in
            the community who share the same interests with you.
          </p>
        </div>
        <div className="pair">
          <p onClick={() => colappse(4)} className="grey">
            Template Details{" "}
          </p>
          <p
            style={{
              display: isClicked[4] ? "block" : "none",
            }}
          >
            Design version 3. Code version 1. Website Template details,
            discussion and updates for this Belle & Carrie Rehabilitation Yoga
            Web Template. Website Template design by Free Website Templates.
            Please feel free to remove some or all the text and links of this
            page and replace it with your own About content.
          </p>
        </div>
      </div>
      <div className="about__right">
        <div className="about__img"></div>
      </div>
    </div>
  );
};
