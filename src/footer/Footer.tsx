import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Dmitry Shavlukevich</h2>
                <h6 className={style.copyright}>©2022 All rights reserved</h6>
            </div>
        </div>
    );
};