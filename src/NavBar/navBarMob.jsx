import { useRef } from "react";
import "./navBarMob.css";
import mobMenu from "../../src/assets/mobMenu.png";
import image1 from "../../src/assets/bhagya.png";
import closeIcon from "../../src/assets/closeIcon.png";

function NavBarMob() {
  const slideMenuref = useRef();
  const showSideMenu = () => {
    slideMenuref?.current?.classList?.add("flyoutMenu");
  };
  const handleShowMenu = () => {
    slideMenuref?.current?.classList?.remove("flyoutMenu");
  };

  return (
    <div className="mv-navbar-wrapper">
      <div className="mv-navbar-container">
        <div className="mv-navbar-col1">
          <img src={image1} alt="me" className="mv-intro-col2Me" />
          <p className="flip_text mv-navbar-col2-txt">Bhagya's Portfolio</p>
        </div>
        <div className="mv-navbar-col2">
          <img
            src={mobMenu}
            alt="me"
            className="mv-intro-col2Menu"
            onClick={showSideMenu}
          />
        </div>
      </div>
      <div ref={slideMenuref} className="menu-container">
        <div className="mv-sideMenu-wrapper">
          <div className="mv-sideMenu-col1">
            <div className="mv-sideMenu-row1">Home</div>
            <div className="mv-sideMenu-row2">About</div>
            <div className="mv-sideMenu-row3">Skills</div>
            <div className="mv-sideMenu-row3">Projets</div>
            <div className="mv-sideMenu-row4">Contact</div>
          </div>
          <div className="mv-sideMenu-col2">
            <div className="mv-sideMenu-row0">
              <img
                src={closeIcon}
                alt="me"
                className="mv-intro-col2Menu"
                onClick={handleShowMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarMob;
