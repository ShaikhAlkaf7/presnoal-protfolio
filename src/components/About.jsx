import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-xl p-12"
    >
      <div>
        <h1 className="text-2xl mb-10 text-center md:text-4xl font-bold ">
          About
        </h1>
        <div className=" md:flex gap-5  flex-col md:flex-row items-center">
          <img
            className="md:h-72 rounded-full"
            src="https://avatars.githubusercontent.com/u/137059131?v=4"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <p>
              As a passionate and dedicated Full-Stack Developer specializing in
              the MERN (MongoDB, Express.js, React, Node.js) stack,
            </p>
            <p>
              I thrive on building dynamic and responsive web applications that
              provide excellent user experiences. With a strong foundation in
              both front-end and back-end technologies,
            </p>
            <p>
              Committed to staying up-to-date with the latest industry trends
              and technologies to ensure the development of cutting-edge
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
