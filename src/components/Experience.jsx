import React from "react";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Experience</h1>
      <div className="flex flex-wrap items-start justify-around ">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 ">
          <span className="font-bold text-white flex-col p-3 bg-zinc-950 gap-2 flex items-center  rounded-2xl ">
            <FaHtml5 className="text-[#E34F26] text-5xl" />
            HTML
          </span>

          <span className="font-bold gap-2 text-white flex-col p-3 bg-zinc-950 flex items-center  rounded-2xl ">
            <FaCss3 className="text-[#1572b6] text-5xl" />
            CSS
          </span>

          <span className="font-bold gap-2 text-white flex-col p-3 bg-zinc-950 flex items-center  rounded-2xl ">
            <FaReact className="text-[#61DAFB] text-5xl" />
            React Js
          </span>

          <span className="font-bold  gap-2 text-white flex-col p-3 bg-zinc-950 flex items-center  rounded-2xl ">
            <FaJs className="text-[#F7DF1E] text-5xl" />
            Java Script
          </span>

          <span className="font-bold  gap-2 text-white flex-col p-3 bg-zinc-950 flex items-center  rounded-2xl ">
            <FaNodeJs className="text-[#6cc24a] text-5xl" />
            Node Js
          </span>

          <span className="font-bold  gap-2 text-white flex-col p-3 bg-zinc-950 flex items-center  rounded-2xl ">
            <DiMongodb className="text-[#4db33d] text-5xl" />
            Mongo Db
          </span>

          <span className="font-bold  gap-2 text-white flex-col p-3 bg-zinc-950 flex items-center  rounded-2xl ">
            <RiTailwindCssFill className="text-[#39bcf8] text-5xl" />
            Tailwind
          </span>
          <span className="font-bold  gap-2 text-white flex-col p-3 bg-zinc-950 flex items-center  rounded-2xl ">
            <SiExpress className="text-[#F7DF1E] text-5xl" />
            Express
          </span>
        </div>

        {/* compony Experience */}
        <div className="flex flex-col md:flex-row gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
          <img src="/images.jpeg" className="w-28 " />
          <span className="text-white ">
            <h2 className="leading-tight ">Full Stack Devloper Intern</h2>
            <h2 className="leading-tight ">In Unified Mentor</h2>
            <p className="text-sm leading-tight font-thin ">
              Sep 2024 - present
            </p>
            <ul className="text-sm p-2">
              <li>- Remote Working </li>
              <li>- Working With MERN Stack </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
