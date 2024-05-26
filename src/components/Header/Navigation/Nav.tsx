import React from 'react';
import style from './Nav.module.scss';
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link activeClass={style.activeLink}
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
            >
                Main
            </Link>
            <Link activeClass={style.activeLink}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
            >
                Skills
            </Link>
            <Link activeClass={style.activeLink}
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
            >
                About Me
            </Link>
            <Link activeClass={style.activeLink}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
            >
                Projects
            </Link>
            <Link activeClass={style.activeLink}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
            >
                Contacts
            </Link>
        </div>
    );
};

