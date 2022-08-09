import React from 'react';
import {Project} from './project/Project';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/Title';

export const Projects = () => {
    return (
        <>
            <div className={style.projectsBlock}>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title title={'My projects'}/>
                    <div className={style.projects}>
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                    </div>
                </div>
            </div>
        </>
    );
};