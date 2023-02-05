import "./intro.scss";
import { init } from "ityped";
//import { BrowserRouter as Router,Link } from "react-router-dom";
import { useEffect, useRef } from "react";
//import { Router } from "react-router";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Engineer", "mentor", "Freelancer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Aish.svg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi everyone 👋, I'm</h2>
          <h1>Aishwarya Shelke </h1>
          {/* <Link to="/Portfolio">Portfolio</Link> */}

          <h3>
            A Software <span ref={textRef}></span>
          </h3>
        </div>
        {/* <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a> */}
      </div>
    </div>
  );
}
