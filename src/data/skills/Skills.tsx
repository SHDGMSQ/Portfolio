import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../../common/styles/Container.module.css';
import {Skill} from './skill/Skill';
import {Title} from '../../common/components/Title/Title';
import {FaGithub, FaReact, FaSass} from 'react-icons/fa';
import {SiMaterialui, SiStorybook, SiTypescript} from 'react-icons/si';
import {TbApi} from 'react-icons/tb';
import {AiOutlineDeploymentUnit} from 'react-icons/ai';
import {SkillsIcons} from '../../common/components/Icons/SkillsIcons/SkillsIcons';


export const Skills = () => {

    return (
        <>
            <div className={style.skillsBlock} id='skills'>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'My Skills'}/>
                    <div className={style.skills}>
                        <Skill title={'React/Redux'}
                               description="Creating pure components, functional programming paradigm, flux-architecture, using a state management (Redux, Store), using action creators, thunks, middleware, application optimization with React.Memo, useMemo, React Hooks, useAppSelector, useAppDispatch"
                               skillIcon={
                                   <SkillsIcons
                                       logoComponent={<FaReact/>}
                                   />}
                        />
                        <Skill title={'JS/TS'}
                               description="Single responsibility principle, using methods of array (map, filter, find), bubble sort, SOLID, OOP, inheritance, prototypes, recursion, try/catch, microtasks, immutability, use of typing data (variables, functions, objects, requests, responses, thunks)"
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <SiTypescript/>
                                   }/>}
                        />
                        <Skill title={'CSS3(Sass)'}
                               description="2"
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <FaSass/>
                                   }/>}
                        />
                        <Skill title={'Rest API'}
                               description="1"
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <TbApi/>
                                   }/>}
                        />
                        <Skill title={'Git/Github'}
                               description="1"
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <FaGithub/>
                                   }/>}
                        />
                        <Skill title={'Material-UI'}
                               description="1"
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <SiMaterialui/>
                                   }/>}
                        />
                        <Skill title={'Storybook'}
                               description="1"
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <SiStorybook/>
                                   }/>}
                        />
                        <Skill title={'Unit Tests'}
                               description="1"
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <AiOutlineDeploymentUnit/>
                                   }/>}
                        />
                    </div>
                </div>
            </div>
        </>

    );
};
