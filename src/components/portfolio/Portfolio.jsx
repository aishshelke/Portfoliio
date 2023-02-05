import { useEffect, useState } from "react";
import PortfolioTab from "../portfolioTab/PortfolioTab";
import "./portfolio.scss";
import {
  // featuredPortfolio,
  webPortfolio,
  // mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    // {
    //   id: "featured",
    //   title: "Featured",
    // },
    {
      id: "web",
      title: "Projects",
    },
         {
      id: "design",
      title: "Certification",
    },
    {
      id: "content",
      title: "Skills",
    },
  ];

  useEffect(() => {
    switch (selected) {
      // case "featured":
      //   setData(featuredPortfolio);
      //   break;
      case "web":
        setData(webPortfolio);
        break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioTab
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.url}
          key={d.id}>
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
                      </div></a>
        ))}
      </div>
    </div>
  );
}
