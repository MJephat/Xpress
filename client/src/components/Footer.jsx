import React from "react";
import Logo from "../image/logo1.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        made with passion and <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
