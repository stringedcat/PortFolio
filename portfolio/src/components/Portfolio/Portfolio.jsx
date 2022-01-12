import "./Portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import { webPortfolio, mobilePortfolio } from "../../data";
import { useEffect } from "react";
const Portfolio = () => {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
  ];
  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((i) => (
          <PortfolioList
            title={i.title}
            active={selected === i.id}
            setSelected={setSelected}
            id={i.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((e) => (
          <a href="/#works">
            {" "}
            <div className="item">
              <img src={e.img} alt="" />
              <h3>{e.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
