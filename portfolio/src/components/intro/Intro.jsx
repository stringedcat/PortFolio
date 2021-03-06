import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Full Stack", "Developer!", "FrontEnd", "BackEnd"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Mauro Loyola" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome, I'm</h2>
          <h1>Mauro Loyola</h1>
          <h3>
            and I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <div className="scrolldown"></div>
        </a>
      </div>
    </div>
  );
};

export default Intro;
