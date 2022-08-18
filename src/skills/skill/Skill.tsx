import React from 'react';
import style from './Skill.module.css';


export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}>
            </div>
            <div className={style.title}>
                <h4>{props.title}</h4>
            </div>
            {/*<div className={style.iconPerсent}></div>*/}
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

//types
type SkillPropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
}