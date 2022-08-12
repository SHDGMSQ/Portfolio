import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title';
import reactIcon from '../assets/images/skillImages/React.png'
import tsIcon from '../assets/images/skillImages/TS.png'
import sassIcon from '../assets/images/skillImages/sass.png'
import restApiIcon from '../assets/images/skillImages/RestAPI.png'
import tddIcon from '../assets/images/skillImages/TDD.png'
import gitIcon from '../assets/images/skillImages/git.png'
import muiIcon from '../assets/images/skillImages/mui.png'
import storybookIcon from '../assets/images/skillImages/storybook.png'
import unitTestIcon from '../assets/images/skillImages/unitTest.png'


export const Skills = () => {

    //icons
    const react = {backgroundImage: `url(${reactIcon})`}
    const ts = {backgroundImage: `url(${tsIcon})`}
    const sass = {backgroundImage: `url(${sassIcon})`}
    const restApi = {backgroundImage: `url(${restApiIcon})`}
    const tdd = {backgroundImage: `url(${tddIcon})`}
    const git = {backgroundImage: `url(${gitIcon})`}
    const mui = {backgroundImage: `url(${muiIcon})`}
    const storybook = {backgroundImage: `url(${storybookIcon})`}
    const unitTest = {backgroundImage: `url(${unitTestIcon})`}


    return (
        <>
            <div className={style.skillsBlock}>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'My Skills'}/>
                    <div className={style.skills}>
                        <Skill title={'React/Redux'}
                               description="React"
                               style={react}
                        />
                        <Skill title={'JS/TS'}
                               description="js"
                               style={ts}
                        />
                        <Skill title={'CSS3(Sass)'}
                               description="2"
                               style={sass}
                        />
                        <Skill title={'Rest API'}
                               description="1"
                               style={restApi}
                        />
                        <Skill title={'TDD'}
                               description="1"
                               style={tdd}
                        />
                        <Skill title={'Git/Github'}
                               description="1"
                               style={git}
                        />
                        <Skill title={'Material-UI'}
                               description="1"
                               style={mui}
                        />
                        <Skill title={'Storybook'}
                               description="1"
                               style={storybook}
                        />
                        <Skill title={'Unit Tests'}
                               description="1"
                               style={unitTest}
                        />
                    </div>
                </div>
            </div>
        </>

    );
};
