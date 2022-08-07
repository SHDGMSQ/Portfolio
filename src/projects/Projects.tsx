import React from 'react';
import {Project} from './project/Project';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Projects = () => {
    return (
        <>
            <div id='projects' className={style.projectsBlock}>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <h2 className={style.title}>My projects</h2>
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