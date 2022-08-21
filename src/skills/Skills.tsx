import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title/Title';
import {FaReact} from 'react-icons/fa';


export const Skills = () => {

    return (
        <>
            <div className={style.skillsBlock}>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'My Skills'}/>
                    <div className={style.skills}>
                        <Skill title={'React/Redux'}
                               description="React"
                               styles={<FaReact/>}
                        />
                        <Skill title={'JS/TS'}
                               description="js"
                               styles={<FaReact/>}
                        />
                        <Skill title={'CSS3(Sass)'}
                               description="2"
                               styles={<FaReact/>}
                        />
                        <Skill title={'Rest API'}
                               description="1"
                               styles={<FaReact/>}
                        />
                        <Skill title={'TDD'}
                               description="1"
                               styles={<FaReact/>}
                        />
                        <Skill title={'Git/Github'}
                               description="1"
                               styles={<FaReact/>}
                        />
                        <Skill title={'Material-UI'}
                               description="1"
                               styles={<FaReact/>}
                        />
                        <Skill title={'Storybook'}
                               description="1"
                               styles={<FaReact/>}
                        />
                        <Skill title={'Unit Tests'}
                               description="1"
                               styles={<FaReact/>}
                        />
                    </div>
                </div>
            </div>
        </>

    );
};
