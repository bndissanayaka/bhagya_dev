import React from "react";
import email from "../../src/assets/email.png";
import linked from "../../src/assets/linked.png";
import github from "../../src/assets/github.png";

function AboutSecMob() {
  const handleDownload = () => {};
  return (
    <div className="mv-aboutSec-Intro">
      <div className="mv-about-row1">
        <p className="flip_text2">About me</p>
      </div>
      <div className="mv-about-row2">
        <p className="mv-about-row2col2txt">
          I'm a front-end developer based in Colombo, SL. with 7+ years of
          overall experience in software development. I have experience in
          ReactJS, JavaScript, CSS, HTML and Redux. I love translating solutions
          into code and working across many different APIs, third-party
          integrations and databases.
        </p>
        <div className="mv-about-row2col14">
          <div class="social-links">
            <a href="https://github.com/bndissanayaka" target="_blank">
              <img src={github} className="mv-social-img" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhagyadissanayaka/"
              target="_blank"
            >
              <img src={linked} className="mv-social-img" alt="" />
            </a>

            <a href="mailto:bndissanayaka@gmail.com" target="_blank">
              <img src={email} className="mv-social-img" alt="" />
            </a>
          </div>
        </div>
        <div className="mv-about-row2col2btn" onClick={handleDownload}>
          <a
            href="./documents/DAB Nirmani-Resume.pdf"
            title=""
            download
            className="mv-about-row2col2btnlink"
          >
            Download Resume
          </a>
        </div>
      </div>{" "}
    </div>
  );
}

export default AboutSecMob;
