import React, {ReactElement} from 'react';
import style from './Skill.module.css';


export const Skill: React.FC<SkillPropsType> = ({title, skillIcon, description}) => {
    return (
        <div className={style.skill}>
                {skillIcon}
            <div className={style.title}>
                <h4>{title}</h4>
            </div>
            <span className={style.description}>{description}</span>
        </div>
    );
};

//types
type SkillPropsType = {
    title: string
    description: string
    skillIcon: ReactElement
}