import React from "react";

import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center "
    >
      <div>
        <h1 className=" text-2xl md:text-6xl  font-bold ">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal  ">
          Feel Free To Reach Out
        </h3>
      </div>
      <ul className="text-sm md:text-xl ">
        <li className="flex items-center gap-1">
          <MdEmail />
          <a href="mailto:shaikhalkafofficial@gmail.com">
            shaikhalkafofficial@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-1">
          <FaGithub />
          <a href="https://github.com/ShaikhAlkaf7">GitHub</a>
        </li>
        <li className="flex items-center gap-1">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/shaikhalkaf/">Linkdin</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
