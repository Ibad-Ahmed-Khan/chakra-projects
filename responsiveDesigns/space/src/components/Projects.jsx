import React, { useState } from "react";

export const Projects = () => {
  const projectTabData = [
    <div className="imageContainer">
      <img
        src="https://images.unsplash.com/photo-1623780770095-920c891f1d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8MzAwJTJGMzAwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="description 1"
        className="img-1"
      />
      <img
        src="https://images.unsplash.com/photo-1619441159429-352f81bddca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MzAwJTJGMzAwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="description 2"
      />
      <img
        src="https://images.unsplash.com/photo-1669002975005-c45f9336397a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MzAwJTJGMzAwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="description 3"
      />
      <img
        src="https://images.unsplash.com/photo-1632585775700-b4a326887ac3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fDMwMCUyRjMwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="description 4"
      />
      <img
        src="https://images.unsplash.com/photo-1599072832402-53b65936b4f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDMwMCUyRjMwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="description 5"
      />
      <img
        src="https://images.unsplash.com/photo-1578377814798-a78a63b505d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MzAwJTJGMzAwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="description 6"
      />
    </div>,
    "two",
    "three",
  ];

  const [project, setProject] = useState("");

  const handleTabClick = (index) => {
    setProject(projectTabData[index]);
  };

  return (
    <div className="projects">
      <h1>projects</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        recusandae laborum ipsam provident non libero ratione molestiae vel.
        Quisquam necessitatibus maiores dolorum sapiente sed ad tenetur omnis
        nihil reprehenderit enim?
      </p>
      <div className="tabs">
        {projectTabData.map((_, index) => {
          return (
            <button
              onClick={() => handleTabClick(index)}
              className="projects-btn"
            >
              tab{index + 1}
            </button>
          );
        })}
      </div>
      <span>{project}</span>
    </div>
  );
};
