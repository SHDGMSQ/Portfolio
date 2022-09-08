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
                               description="Creating pure components, functional programming paradigm, flux-architecture, using a state management (Redux, Store), using reducers, action creators, thunks, middleware, children, application optimization with React.Memo, useMemo, React Hooks."
                               skillIcon={
                                   <SkillsIcons
                                       logoComponent={<FaReact/>}
                                   />}
                        />
                        <Skill title={'JS/TS'}
                               description="Single responsibility principle, using methods of array (map, filter, find), bubble sort, SOLID, OOP, inheritance, prototypes, recursion, try/catch, microtasks, immutability, use of typing data (variables, functions, objects, requests, responses, thunks)."
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <SiTypescript/>
                                   }/>}
                        />
                        <Skill title={'CSS3(Sass)'}
                               description="Web page styling, creating a responsive layout, using modules, sass nesting, variables, creating mixins, media queries, flex, grid, responsive menu, pseudo elements, import modules with tag 'style', creating animations with libraries or pure css code, transitions, positioning. "
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <FaSass/>
                                   }/>}
                        />
                        <Skill title={'Rest API'}
                               description="Creating requests, get, post, put, patch, delete requests, request payload, response data, type for requests and responses, use axios, async/await, thunks, optimization requests to endpoints with creating universal object with base settings (baseURL, withCredentials)."
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <TbApi/>
                                   }/>}
                        />
                        <Skill title={'Git/Github'}
                               description="Сollaborative development experience, using commands git checkout, git fetch, git merge for work with branches, reverting commits (reset mixed, reset hard), using commands like git init, git commit, git push and using github.io for presentation applications."
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <FaGithub/>
                                   }/>}
                        />
                        <Skill title={'Material-UI'}
                               description="Styling class components, styling functional using react hooks, material components, styling with styledComponent, redefining material components, theme for providing default styles for the project with accessibility through the provider."
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <SiMaterialui/>
                                   }/>}
                        />
                        <Skill title={'Storybook'}
                               description="Use to create a library of components, test components within the current task, develop components in an isolated environment for reuse in any part of the project, create documentation based on the created components."
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <SiStorybook/>
                                   }/>}
                        />
                        <Skill title={'Unit Tests'}
                               description="Creating tests to improve the quality of the code, saving resources and time to find application errors, using the TDD (Test-Driven Development) methodology, creating tests for application reducers in order to check the correct operation of the logic"
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
