import "./testimonials.scss";
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "NextJS Pizza App",
      title: "Next JS App ",
      img: "https://pngimg.com/uploads/pizza/pizza_PNG44084.png",
      icon: "assets/linkedin.png",
      href: "https://www.linkedin.com/in/joaquin-cardozo/",
      desc: `Building an app with NextJS`,
    },
    {
      id: 2,
      name: "Spring Java + React",
      title: "CRUD App using Spring backend and React",
      img: "https://cdn-thumbs.comidoc.net/750/4239058_e36a_3.jpg",
      href: "https://www.linkedin.com/in/lucas-luciano-lopez/",
      icon: "assets/linkedin.png",
      desc: `An app to learning how to use the Java framework Spring to use it in the backend, an the for the frontend off course ReactJS.`,
      featured: true,
    },
    {
      id: 3,
      name: "MERN Stack App",
      title: "MongoDB, ExpressJs, ReactJs, NodeJs App",
      img: "https://camo.githubusercontent.com/85cf7e1a8b85221e81ba91cbce29c917b91a7390bb3ca06aa31cfd1eadd7fe60/68747470733a2f2f7777772e337269746563686e6f6c6f676965732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f31312f4d45524e2d537461636b2d547261696e696e672d696e2d50756e652d65313537353032323432373234342e706e67",
      href: "https://www.linkedin.com/in/leonel-agustin-llane-02981b209/",
      icon: "assets/linkedin.png",
      desc: `An app using MERN Stack, currently I know the PERN stack but this app is for learn to use MongoDB as database.`,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Projects that I'm working now</h1>
      <div className="container">
        {data.map((t) => (
          <div className={t.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={t.img} alt="" />

              {/*             <a href={t.href}>
                <img className="right" src={t.icon} alt="" />
              </a> */}
            </div>
            <div className="center">{t.desc}</div>
            <div className="bottom">
              <h3>{t.name}</h3>
              <h4>{t.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
