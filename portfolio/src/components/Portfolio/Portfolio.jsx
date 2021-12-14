import "./Portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import { webPortfolio, mobilePortfolio } from "../../data";
import { useEffect } from "react";
const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
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
          <div className="item">
            <img src={e.img} alt="" />
            <h3>{e.title}</h3>
          </div>
        ))}
        {/*   <div className="item">
          <img
            src="https://www.smdwebtech.com/wp-content/uploads/2020/11/Mobile-Banking_1.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
