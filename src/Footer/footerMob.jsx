import React from "react";
import arrowtop from "../../src/assets/arrowtop.png";

function FooterMob() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mv-footer-wrapper">
      <div className="mv-footer-col1">bhagyadissanayaka@2023</div>
      <div className="mv-footer-col2">
        <img
          src={arrowtop}
          className="img-arrow-topmob"
          id="pulse"
          onClick={scrollToTop}
          alt="srolltop"
        />
      </div>
    </div>
  );
}

export default FooterMob;
