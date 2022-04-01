import React from 'react';
import style from './Project.module.css'

export const Project = () => {
    return (
        <div className={style.project}>
                <div className={style.icon}>
                    <button>Click</button>
                </div>
            <span className={style.projectName}>Name of project</span>
            <span className={style.description}>description</span>
        </div>
    )
}