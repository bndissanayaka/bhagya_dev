import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import NavBar from "../NavBar/navBar";
import IntroSection from "../IntroSection/introSection";
import AboutSec from "../AboutMe/aboutSec";
import Skills from "../SkillsSection/skills";
import Projects from "../Projects/projects";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";
import NavBarMob from "../NavBar/navBarMob";
import IntroSectionMob from "../IntroSection/introSectionMob";
import AboutSecMob from "../AboutMe/aboutSecMob";
import SkillsMob from "../SkillsSection/skillsMob";
import ProjectsMob from "../Projects/projectsMob";
import ContactMob from "../Contact/contactMob";
import FooterMob from "../Footer/footerMob";

function Home() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 767;

  useEffect(() => {
    window.matchMedia("min-width: 768px").onchange = (e) => {
      if (e.matches) {
        setWidth(window.innerWidth);
      }
    };
  }, []);

  return (
    <div className="lv-home-sec1">
      {width > breakPoint ? (
        <NavBar
          scrollToSection={scrollToSection}
          section1={section1}
          section3={section3}
          section2={section2}
          section4={section4}
        />
      ) : (
        <NavBarMob />
      )}
      {width > breakPoint ? (
        <IntroSection section1={section1} />
      ) : (
        <IntroSectionMob />
      )}

      {width > breakPoint ? <AboutSec section3={section3} /> : <AboutSecMob />}

      {width > breakPoint ? <Skills /> : <SkillsMob />}
      {width > breakPoint ? <Projects section2={section2} /> : <ProjectsMob />}
      {width > breakPoint ? <Contact section4={section4} /> : <ContactMob />}
      {width > breakPoint ? <Footer /> : <FooterMob />}
    </div>
  );
}

export default Home;
