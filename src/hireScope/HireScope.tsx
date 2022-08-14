import React from 'react';
import style from './HireScope.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/Title';

export const HireScope = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h3 className={style.description}>Let's Work Together On Your Next Project!</h3>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
};