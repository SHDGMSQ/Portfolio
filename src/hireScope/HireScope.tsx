import React from 'react';
import style from './HireScope.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const HireScope = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}> Hire me</h2>
                <button>Hire me</button>
            </div>
        </div>
    );
};