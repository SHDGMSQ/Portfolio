import style from './Title.module.css'
import React from 'react';


export const Title: React.FC<TitlePropsType> = ({title}) => {
    return <>
        <div className={style.title}>
            <h2>{title}</h2>
            <div className={style.textCenter}>
                <span></span>
                <span></span>
            </div>
        </div>
    </>
}

//types
type TitlePropsType = {
    title: string
}