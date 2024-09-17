import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 ">
      <div className=" md:w-2/4 md:pt-10 ">
        <h1 className="  text-2xl mb-1 md:text-6xl font-mono font-bold flex leading-normal tracking-tighter ">
          Hi! I'm
        </h1>
        <h1 className="  text-2xl mb-1 md:text-6xl font-mono font-bold flex leading-normal tracking-tighter ">
          <Typewriter
            options={{
              strings: ["Shaikh Alkaf", "MERN Devloper"],
              autoStart: true,
              loop: true,
              delay: 100,
              cursor: ".",
            }}
          />
        </h1>
        <p className="  text-sm md:text-xl tracking-tight ">
          A MERN Stack Developer specializes in building web applications using
          MongoDB, Express.js, React.js, and Node.js. They manage both front-end
          and back-end development, ensuring seamless integration and efficient
          data handling across the stack.
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-xl bg-[#465697]">
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1d0sPp0DdxyRPyFp2GIwAfAX4uuiJ2VeO-LgpMAQ0ckU/edit?usp=sharing"
          >
            Resume
          </a>
        </button>
      </div>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/137059131?v=4"
          alt="Alkaf"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;
