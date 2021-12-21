import { useState } from "react";
import "./works.scss";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Recipes App",
      desc: "A project about recipes, using an external api and tools learned in a bootcamp: Nodejs, Reactjs, Reduxjs, Expressjs, Sequelize ORM and PostgreSQL. ",
      src: "https://www.youtube.com/embed/xFTOmq1HMR8",
      react: true,
      node: true,
      redux: true,
      postgre: true,
      express: true,
      sequelize: true,
      rep: "https://github.com/stringedcat/loyolarecipes",
      pag: "",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Movies MaterialUI",
      desc: "A practice App using Material UI library to do a mocked data with React.js and Redux.js",
      src: "https://www.youtube.com/embed/6WwXi5659qY",
      react: true,
      redux: true,
      material: true,
      rep: "https://github.com/stringedcat/MoviesMaterialUI",
      pag: "https://mauro-movies-material-ui.vercel.app/",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Authentication App",
      desc: "An app about authentication using node.js, express.js, passport.js and react.js for the front end. You can login into the webpage with google, facebook and github.",
      src: "https://www.youtube.com/embed/mLuobdyd97M",
      react: true,
      node: true,
      express: true,
      passport: true,
      rep: "https://github.com/stringedcat/loginPassport",
      pag: "",
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
                  <h2>{d.title}</h2>
                  <h4>Tools used: </h4>
                  <div className="imgContainer">
                    {d.react && (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                        alt=""
                      />
                    )}
                    {d.node && d.express && (
                      <img
                        src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png"
                        alt=""
                      />
                    )}
                    {d.postgre && (
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                        alt="postgresql"
                        width="40"
                        height="40"
                      />
                    )}
                    {d.material && (
                      <img
                        src="https://v4.mui.com/static/logo.png"
                        alt="postgresql"
                        width="40"
                        height="40"
                      />
                    )}
                    {d.redux && (
                      <img
                        src="https://www.digital55.com/wp-content/uploads/2019/11/Cuando_y_por_que_debo_usar_redux_en_mis_proyectos_frontend.jpg"
                        alt="postgresql"
                        width="40"
                        height="40"
                      />
                    )}
                    {d.passport && (
                      <img
                        src="https://leolanchas.com/wp-content/uploads/2013/07/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png"
                        alt="postgresql"
                        width="40"
                        height="40"
                      />
                    )}
                    {d.sequelize && (
                      <img
                        src="https://sequelize.org/master/image/brand_logo.png"
                        alt="postgresql"
                        width="40"
                        height="40"
                      />
                    )}
                  </div>

                  <p>{d.desc}</p>
                  <a href={d.rep}>Github Repository</a>
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
        alt=""
      ></img>
      <img
        src="assets/arrow.png"
        className="arrow right"
        onClick={() => handleClick("right")}
        alt=""
      ></img>
      <a href="/#testimonials">
        {" "}
        <div className="scrolldown"></div>
      </a>
    </div>
  );
};

export default Works;
