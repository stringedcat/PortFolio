import "./testimonials.scss";
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Lucas Lopez",
      title: "Full Stack Developer",
      img: "https://avatars.githubusercontent.com/u/82116213?v=4",
      href: "https://www.linkedin.com/in/lucas-luciano-lopez/",
      icon: "assets/linkedin.png",
      desc: `"Gran trabajador y programador, siempre dispuesto a ayudar en cualquier problema que encuentre."`,
    },
    {
      id: 2,
      name: "Leonel LLane",
      title: "Full Stack Developer",
      img: "https://avatars.githubusercontent.com/u/78386531?v=4",
      href: "https://www.linkedin.com/in/leonel-agustin-llane-02981b209/",
      icon: "assets/linkedin.png",
      desc: `"Una persona dedicada y la verdad me ayudó en todo mi camino como developer, muy sociable y empático con todos los que se encuentra."`,
      featured: true,
    },
    {
      id: 3,
      name: "Joaquín Cardozo",
      title: "Frontend Web Developer en Neivor",
      img: "https://avatars.githubusercontent.com/u/44176231?v=4",
      icon: "assets/linkedin.png",
      href: "https://www.linkedin.com/in/joaquin-cardozo/",
      desc: `"Excelente programador y persona, muy abierto a ideas e innovador. Tiene la habilidad de adaptarse rápido al ambiente."`,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((t) => (
          <div className={t.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={t.img} alt="" />
              <a href={t.href}>
                <img className="right" src={t.icon} alt="" />
              </a>
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
