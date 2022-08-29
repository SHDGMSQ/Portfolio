import React from 'react';
import style from './Nav.module.scss';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../app/App';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink to={PATH.MAIN}>Main</NavLink>
            <NavLink to={PATH.SKILLS}>Skills</NavLink>
            <NavLink to={PATH.PROJECTS}>Projects</NavLink>
            <NavLink to={PATH.CONTACTS}>Contacts</NavLink>
        </div>
    );
};

