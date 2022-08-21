import React, {ReactElement} from 'react';
import style from '../Button/Button.module.css';
import {ButtonsIcons} from '../Icons/ButtonsIcon/ButtonsIcons';


export const Button: React.FC<ButtonPropsType> = ({title, logo, styles}) => {
    return <>
        <button className={style.button} style={styles}>
            <div className={style.innerButton}>
                <span className={style.buttonTitle}>{title}</span>
                    {<ButtonsIcons logoComponent={logo}/>}
            </div>
        </button>
    </>;
};

//types
type ButtonPropsType = {
    title: string
    logo?: ReactElement<{ logoComponent: ReactElement }>
    styles?: StylesPropsType
}
type StylesPropsType = {
    backgroundColor?: string,
    border?: string,
    borderRadius?: string,
    width?: string,
    height?: string
}