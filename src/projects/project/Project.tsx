import React from 'react';
import style from './Project.module.css';

export const Project = (props: ProjectPropsType) => {

    const onClickHandler = () => {}

    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <button className={style.button} onClick={onClickHandler}>Click</button>
            </div>
            <span className={style.projectName}>{props.projectName}</span>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

//types
type ProjectPropsType = {
    projectName: string
    description: string
    style: {backgroundImage: string}
}