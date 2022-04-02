import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Dzmitry Shavlukevich</h2>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <h6 className={style.copyright}>All rights reserved</h6>
            </div>
        </div>
    );
};