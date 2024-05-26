import React from 'react';
import style from './Project.module.scss';
import {Button} from '../../../components/Button/Button';

export const Project: React.FC<ProjectPropsType> = ({styles, projectName, description}) => {

    const onClickHandler = () => {}

    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={styles}>
                <Button title={'Show More'} onClick={() => {}}/>
            </div>
            <span className={style.projectName}>{projectName}</span>
            <span className={style.description}>{description}</span>
        </div>
    );
};

//types
type ProjectPropsType = {
    projectName: string
    description: string
    styles: {backgroundImage: string}
}