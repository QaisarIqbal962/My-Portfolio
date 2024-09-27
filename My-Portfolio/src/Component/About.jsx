import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gray-800  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          As a front-end developer with six months of experience, I specialize
          in JavaScript, React, and Tailwind CSS. I've built responsive web
          applications and dynamic projects with React, and I'm skilled in using
          Tailwind CSS for efficient and customizable styling. I thrive in
          collaborative environments and am committed to continuous learning.
          I'm eager to contribute to innovative projects and work with talented
          professionals in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;
