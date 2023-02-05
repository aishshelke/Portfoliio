import "./contact.scss";
import { FaGithub, FaLinkedin ,FaInstagram  } from "react-icons/fa";

export default function Contact() {
  return (
  <div>
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/email.svg" alt="" />
      </div>
      <div className="right">
        <h2>contact me</h2>
       <p>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Competitive 
         Programming,web development otherwise I am always up for a good conversation</p>
      <ul>
        <li><a href="https://github.com/aishshelke"  ><FaGithub/> </a></li>
        <li><a href="https://www.linkedin.com/in/aishwarya-shelke-94510a18b/">< FaLinkedin/> </a></li>
        <li> <a href="https://www.instagram.com/tara_shelke/"  ><FaInstagram/></a></li>
        <li><a href="https://docs.google.com/document/d/1e0bOFQCLJdBlDLynsRwwcJSdSvman5QC5-y5wP8DZkw/edit?usp=sharing" >Resume</a></li>
        {/* <li><link href="https://docs.google.com/document/d/1e0bOFQCLJdBlDLynsRwwcJSdSvman5QC5-y5wP8DZkw/edit"><button >Resume</button></link></li> */}
        {/* <li> <a href="https://github.com/aishshelke"  ><Faleetcode/></a></li> */}
 </ul>
 
        </div>
    </div>

{/* new fileds to be added
    
<div className="contact" id="contact">

    <div className="left">
        <h2>Address:</h2>
        <h3>Pune</h3>
    <h2>Contact Number:</h2>
    <h3>+91 9657724120</h3>
    </div>
    <div className="right">
      <img src="assets/contactus.svg" alt="" />
    </div>

  </div> */}
  </div>
  );
}
