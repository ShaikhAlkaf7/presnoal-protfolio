import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-auto w-full overflow-hidden bg-[#171d32] ">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
