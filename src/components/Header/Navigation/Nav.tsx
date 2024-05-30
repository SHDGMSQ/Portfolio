import React, {useState} from "react";
import style from "./Nav.module.scss";
import {Link} from "react-scroll";

const offset = -29;

export const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const clickNavHandler = () => {
    if (isMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={style.nav} >
      <div className={`${style.burger} ${isMenuOpen ? style.cross: ""}`} onClick={clickNavHandler}>
        <span className={isMenuOpen ? style.cross: ""}></span>
      </div>
      <div className={`${style.links} ${isMenuOpen ? style.show : ""}`}>
        <Link activeClass={style.activeLink}
              to="index"
              spy
              smooth
              offset={offset}
              duration={500}
              onClick={() => {
                document.body.style.overflow = "auto";
                setIsMenuOpen(false);
              }}
              onSetActive={() => {
                window.location.hash = "#/index";
              }}
        >
          Main
        </Link>
        <Link activeClass={style.activeLink}
              to="skills"
              spy
              smooth
              offset={offset}
              duration={500}
              onClick={() => {
                document.body.style.overflow = "auto";
                setIsMenuOpen(false);
              }}
              onSetActive={() => {
                window.location.hash = "#/skills";
              }}
        >
          Skills
        </Link>
        <Link activeClass={style.activeLink}
              to="aboutMe"
              spy
              smooth
              offset={offset}
              duration={500}
              onClick={() => {
                document.body.style.overflow = "auto";
                setIsMenuOpen(false);
              }}
              onSetActive={() => {
                window.location.hash = "#/aboutMe";
              }}
        >
          About Me
        </Link>
        <Link activeClass={style.activeLink}
              to="projects"
              spy
              smooth
              offset={offset}
              duration={500}
              onClick={() => {
                document.body.style.overflow = "auto";
                setIsMenuOpen(false);
              }}
              onSetActive={() => {
                window.location.hash = "#/projects";
              }}
        >
          Projects
        </Link>
        <Link activeClass={style.activeLink}
              to="contacts"
              spy
              smooth
              offset={offset}
              duration={500}
              onClick={() => {
                document.body.style.overflow = "auto";
                setIsMenuOpen(false);
              }}
              onSetActive={() => {
                window.location.hash = "#/contacts";
              }}
        >
          Contacts
        </Link>
      </div>

    </div>
  );
};

