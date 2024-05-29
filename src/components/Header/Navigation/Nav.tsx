import React from "react";
import style from './Nav.module.scss';
import { Link } from 'react-scroll';

export const Nav = () => {

    return (
        <div className={style.nav}>
            <Link activeClass={style.activeLink}
                  to="index"
                  spy
                  smooth
                  offset={-30}
                  duration={500}
                  onSetActive={() => {window.location.hash = "#/index"}}
            >
                Main
            </Link>
            <Link activeClass={style.activeLink}
                  to="skills"
                  spy
                  smooth
                  offset={-30}
                  duration={500}
                  onSetActive={() => {window.location.hash = "#/skills"}}
            >
                Skills
            </Link>
            <Link activeClass={ style.activeLink}
                  to="aboutMe"
                  spy
                  smooth
                  offset={-30}
                  duration={500}
                  onSetActive={() => {window.location.hash = "#/aboutMe"}}
            >
                About Me
            </Link>
            <Link activeClass={style.activeLink}
                  to="projects"
                  spy
                  smooth
                  offset={-30}
                  duration={500}
                  onSetActive={() => {window.location.hash = "#/projects"}}
            >
                Projects
            </Link>
            <Link activeClass={style.activeLink}
                  to="contacts"
                  spy
                  smooth
                  offset={-30}
                  duration={500}
                  onSetActive={() => {window.location.hash = "#/contacts"}}
            >
                Contacts
            </Link>
        </div>
    );
};

