import "./works.scss";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem culpa aliquam eos doloribus eligendi? Quas,
                  eveniet nobis. Beatae nobis illo voluptatem cum id, inventore
                  ipsa eum non ratione cupiditate suscipit!
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
