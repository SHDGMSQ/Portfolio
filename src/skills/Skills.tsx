import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title/Title';
import {FaGithub, FaReact, FaSass} from 'react-icons/fa';
import {SiMaterialui, SiStorybook, SiTypescript} from 'react-icons/si';
import {TbApi} from 'react-icons/tb';
import {AiOutlineDeploymentUnit} from 'react-icons/ai';
import {SkillsIcons} from '../common/components/Icons/SkillsIcons/SkillsIcons';


export const Skills = () => {

    return (
        <>
            <div className={style.skillsBlock}>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'My Skills'}/>
                    <div className={style.skills}>
                        <Skill title={'React/Redux'}
                               description="React"
                               skillIcon={
                                   <SkillsIcons
                                       logoComponent={<FaReact/>}
                                   />}
                        />
                        <Skill title={'JS/TS'}
                               description="js"
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
