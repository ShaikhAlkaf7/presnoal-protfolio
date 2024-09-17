import React from "react";

const ProjectCard = ({ title, main, image, demo, frontend, backend }) => {
  return (
    <div className=" p-3  flex flex-col w-96  bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-md">
      <img src={image} className="p-4" alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-base leading-tight py-2 ">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:p-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-md bg-[#465697]">
          <a href={demo} target="_blank">
            Demo
          </a>
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:p-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-md bg-[#465697]">
          <a href={frontend} target="_blank">
            Frontend Code
          </a>
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:p-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-md bg-[#465697]">
          <a href={backend} target="_blank">
            Backend Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
