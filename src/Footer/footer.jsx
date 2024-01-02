import React from "react";
import "./footer.css";
import arrowtop from "../../src/assets/arrowtop.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="lv-footer-wrapper">
      <div className="lv-footer-col1">bhagyadissanayaka@2023</div>
      <div className="lv-footer-col2">
        <img
          src={arrowtop}
          className="img-arrow-top"
          id="pulse"
          onClick={scrollToTop}
          alt="srolltop"
        />
      </div>
    </div>
  );
}

export default Footer;
