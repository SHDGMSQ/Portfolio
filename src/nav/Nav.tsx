import React from 'react';
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={style.nav}>
       <a href={''} style={{textDecoration: 'none'}}>Main</a>
       <a href={''} style={{textDecoration: 'none'}}>Skills</a>
       <a href={''} style={{textDecoration: 'none'}}>Projects</a>
       <a href={''} style={{textDecoration: 'none'}}>Contacts</a>
        </div>
    );
};