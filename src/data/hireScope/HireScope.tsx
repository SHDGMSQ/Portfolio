import React from 'react';
import style from './HireScope.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Button} from '../../common/components/Button/Button';

export const HireScope = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h3 className={style.description}>Let's Work Together On Your Next Project!</h3>
                <Button title={'Hire Me!'}/>
            </div>
        </div>
    );
};