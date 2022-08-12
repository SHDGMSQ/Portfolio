import React from 'react';
import {Project} from './project/Project';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/Title';
import socialIcon from '../assets/images/projectImage/socialNetwork.jpg'
import todoIcon from '../assets/images/projectImage/todolist.jpg'

export const Projects = () => {

    //icons
    const social = {backgroundImage:`url(${socialIcon})`}
    const todoList = {backgroundImage:`url(${todoIcon})`}


    return (
        <>
            <div className={style.projectsBlock}>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title title={'My projects'}/>
                    <div className={style.projects}>
                        <Project
                            projectName='Social Network'
                            description='1wrgfwefwerf'
                            style={social}
                        />
                        <Project
                            projectName='TodoList'
                            description='2wefwefwef'
                            style={todoList}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
