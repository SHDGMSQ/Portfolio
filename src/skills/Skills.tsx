import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title';
import jsIcon from './../common/images/JS.png'


export const Skills = () => {
    return (
        <>
            <div className={style.skillsBlock}>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'My Skills'}/>
                    <div className={style.skills}>
                        <Skill title={'JS'}
                               description="1"
                        icon={jsIcon}
                        />
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
        </>

    );
};