import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Skill} from './skill/Skill';


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           description="Hi, it is my JS skill11111 11111111111111 111111111111 111111111 111111111111 11111111 11111 111111111111 1111111111111 1111111111111 111111111111111111111111"/>
                    <Skill title={'HTML'}
                           description="Hi, it is my HTML skill2222222222222 22222222222222222222 22222222222"/>
                    <Skill title={'React'}
                           description="Hi, it is my React skill333333333333333333 3333333333333333333333"/>
                    <Skill title={'HTML'}
                           description="Hi, it is my HTML skill2222222222222 22222222222222222222 22222222222"/>
                    <Skill title={'HTML'}
                           description="Hi, it is my HTML skill2222222222222 22222222222222222222 22222222222"/>
                    <Skill title={'HTML'}
                           description="Hi, it is my HTML skill2222222222222 22222222222222222222 22222222222"/>
                </div>
            </div>
        </div>
    );
};