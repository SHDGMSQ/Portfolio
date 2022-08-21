import React from 'react';
import style from './Project.module.css';
import {Button} from '../../common/components/Button/Button';

export const Project = (props: ProjectPropsType) => {

    const onClickHandler = () => {}

    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <Button title={'Show More'}/>
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