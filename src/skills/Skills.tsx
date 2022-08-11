import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title';
import jsIcon from '../assets/images/JS.png'
import htmlIcon from '../assets/images/HTML.png'


export const Skills = () => {

    //icons
    const js = {backgroundImage: `url(${jsIcon})`}
    const html = {backgroundImage: `url(${htmlIcon})`}


    return (
        <>
            <div className={style.skillsBlock}>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'My Skills'}/>
                    <div className={style.skills}>
                        <Skill title={'React/Redux'}
                               description="React"
                               style={html}
                        />
                        <Skill title={'JS/TS'}
                               description="js"
                               style={html}
                        />
                        <Skill title={'HTML5/CSS3(Sass)'}
                               description="2"
                               style={html}
                        />
                        <Skill title={'Rest API'}
                               description="1"
                               style={js}
                        />
                        <Skill title={'TDD'}
                               description="1"
                               style={js}
                        />
                        <Skill title={'Git/Github'}
                               description="1"
                               style={js}
                        />
                        <Skill title={'Material-UI'}
                               description="1"
                               style={js}
                        />
                        <Skill title={'Storybook'}
                               description="1"
                               style={js}
                        />
                        <Skill title={'Unit tests'}
                               description="1"
                               style={js}
                        />
                        <TestProgressBar/>
                    </div>
                </div>
            </div>
        </>

    );
};

const TestProgressBar = () => {

    return <>
        <svg className={style.progressRing}>
            <circle id='circle' className={style.circle} cx='60px' cy='60px' r='52'/>
        </svg>
        </>
}