import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className=" p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className=" py-12 px-8 flex flex-wrap gap-5 justify-center ">
        <ProjectCard
          image={"/kartmate.png"}
          main={
            "	Developed a feature-rich application for e-commerce MERN stack.	Created a Dashboard for track sales , stock and orders Implemented CRUD operations"
          }
          title={"Kart Mate Full Stack E-commerce"}
          backend={"https://github.com/ShaikhAlkaf7/Kart-Mate-BackEnd"}
          frontend={"https://github.com/ShaikhAlkaf7/Kart-Mate-FrontEnd"}
          demo={"https://kart-mate--five.vercel.app/"}
        />

        <ProjectCard
          backend={"https://github.com/ShaikhAlkaf7/Chat-Mate-BackEnd"}
          frontend={"https://github.com/ShaikhAlkaf7/Chat-Mate-FrontEnd"}
          demo={"https://chat-mate-front-end.vercel.app/"}
          image={"/chatmate.png"}
          main={
            "➔	Instant messaging using Socket.io with real-time updates	Implemented JWT token for secure user authentication"
          }
          title={"●	Real time chat  MERN stack app"}
        />
      </div>
    </div>
  );
};

export default Projects;
