import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-800  text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
         I’m a front-end developer with six months of experience specializing in JavaScript, React, and Tailwind CSS. I build responsive, dynamic web applications with a focus on clean, efficient design. Passionate about learning and collaboration, I’m eager to contribute to innovative projects and grow alongside talented professionals in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;
