import React from "react";
import "./Footer.scss";
// import footerImg from "./Aish.svg";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" ,textAlign:"center"}}
    >
      {/* <img src={footerImg} alt="" className="footer__img pointer" /> */}
      <span
        className="copyright"
        style={{ color: "black", fontSize: "14px", opacity: "0.75" }}
      >
          Made with ❤️ by Aishwarya shelke    
  </span>
    </div>
  );
}

export default Footer;