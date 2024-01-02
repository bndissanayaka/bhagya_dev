import React, { useState } from "react";
import vid1 from "../../src/assets/vid1.gif";
import vid2 from "../../src/assets/vid2.gif";

function ProjectsMob(props) {
  const [showDescp2, setshowDescp2] = useState(false);

  return (
    <div ref={props.section2} className="mv-projectSec-wrapper">
      <div className="mv-skillsSec-title">
        <p className="flip_text2">Projects</p>
      </div>
      <div className="mv-projects-wrapper" style={{ marginTop: "6vw" }}>
        <div className="mv-projects-col1">
          <div
            className="mv-projects-col1layer1"
            style={{ opacity: "0.5", backgroundColor: "black" }}
          >
            <img src={vid1} alt="project1" className="mv-projects-proj1" />
          </div>
          <div className="mv-projects-col1layer2">
            <>
              <a
                href="https://lassana.com/"
                className="mv-projects-link1"
                target="_blank"
              >
                <p className="mv-projects-col1layer2txt1">Lassana.com</p>
              </a>
              <p className="mv-projects-col1layer2txt2">
                Premium e-commerce web site selling goods online
              </p>
              <div className="mv-projects-col1layer2txtx">
                <span className="mv-projects-col1layer2txt3">ReactJS</span>
                <span className="mv-projects-col1layer2txt3">JavaScript</span>
                <span className="mv-projects-col1layer2txt3">CSS</span>
                <span className="mv-projects-col1layer2txt3">HTML</span>
                <span className="mv-projects-col1layer2txt3">Redux</span>
              </div>
            </>
          </div>
        </div>
        <div className="mv-projects-col2">
          <div
            className="mv-projects-col1layer1"
            style={{ opacity: "0.5", backgroundColor: "black" }}
          >
            <img src={vid2} alt="project1" className="mv-projects-proj1" />
          </div>
          <div className="mv-projects-col1layer2">
            <>
              <a
                href="https://lassana.com/"
                className="mv-projects-link1"
                target="_blank"
              >
                <p className="mv-projects-col1layer2txt1">My Portfolio</p>
              </a>
              <p className="mv-projects-col1layer2txt2">
                A testimony of my passion for frontend development
              </p>
              <div className="mv-projects-col1layer2txtx">
                <span className="mv-projects-col1layer2txt3">ReactJS</span>
                <span className="mv-projects-col1layer2txt3">JavaScript</span>
                <span className="mv-projects-col1layer2txt3">CSS</span>
                <span className="mv-projects-col1layer2txt3">HTML</span>
                <span className="mv-projects-col1layer2txt3">Redux</span>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsMob;
