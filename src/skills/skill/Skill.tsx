import React, {ReactElement} from 'react';
import style from './Skill.module.css';


export const Skill: React.FC<SkillPropsType> = ({title, styles, description}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                {styles}
            </div>
            <div className={style.title}>
                <h4>{title}</h4>
            </div>
            {/*<div className={style.iconPerсent}></div>*/}
            <span className={style.description}>{description}</span>
        </div>
    );
};

//types
type SkillPropsType = {
    title: string
    description: string
    styles: ReactElement
}