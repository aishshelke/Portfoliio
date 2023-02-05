import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      // icon: "./assets/Education.svg",
      title: "Bachlor Of Technology june-2021",
      desc:
        "I am Graduate from G.H.Raisoni College of Engineering and Management,pune ",
      img:
        "./assets/ghrcem.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Higher school",
      desc:
        "I have completed my higher schooling from Kulbushan junior College of Arts and Science in the filed of pcm-cs",
      img:
        "./assets/highers.svg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Secondary Schooling",
      desc:
        "I have Completed my secondary Schooling from jawahar vidyalaya jintur .",
      img:
        "./assets/jvj.jfif",
    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
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
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
