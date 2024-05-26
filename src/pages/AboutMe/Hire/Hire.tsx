import React from 'react';
import style from './Hire.module.scss';
import styleContainer from '../../../styles/Container.module.css';
import {Button} from '../../../components/Button/Button';

export const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h3 className={style.description}>Let's Work Together On Your Next Project!</h3>
                <Button title={'Hire Me!'} onClick={() => {}}/>
            </div>
        </div>
    );
};