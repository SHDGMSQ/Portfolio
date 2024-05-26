import React from 'react';
import {Project} from './Project/Project';
import style from './Projects.module.scss';
import styleContainer from '../../styles/Container.module.css';
import {Title} from '../../components/Title/Title';
import socialIcon from '../../assets/images/socialNetwork.jpg'
import todoIcon from '../../assets/images/todolist.jpg'

export const Projects = () => {

    //icons
    const social = {backgroundImage:`url(${socialIcon})`}
    const todoList = {backgroundImage:`url(${todoIcon})`}


    return (
        <>
            <div className={style.projectsBlock} id='projects'>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title title={'My Projects'}/>
                    <div className={style.projects}>
                        <Project
                            projectName='Social Network'
                            description='1wrgfwefwerf'
                            styles={social}
                        />
                        <Project
                            projectName='TodoList'
                            description='2wefwefwef'
                            styles={todoList}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
