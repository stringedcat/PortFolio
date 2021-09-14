import { useState } from "react";
import "./works.scss";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Recipes App",
      desc: "A project about recipes, using an api and used tools learned in a bootcamp ",
      src: "https://www.youtube.com/embed/xFTOmq1HMR8",
      rep: "https://github.com/stringedcat/loyolarecipes",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Lessons Online",
      desc: "A e-commerce about lessons online, using metodology SCRUM, tools learned in a bootcamp and more firebase, typescript, and bootstrap. (Video is missing)",
      src: "https://www.youtube.com/embed/Iqr3XIhSnUQ",
      rep: "",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.rep}>Github Repositore</a>
                </div>
              </div>
              <div className="right">
                <iframe
                  src={d.src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        onClick={() => handleClick("left")}
      ></img>
      <img
        src="assets/arrow.png"
        className="arrow right"
        onClick={() => handleClick("right")}
      ></img>
    </div>
  );
};

export default Works;
