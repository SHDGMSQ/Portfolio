import React, {ReactElement} from 'react';
import style from './Button.module.scss';
import {ButtonsIcons} from '../Icons/ButtonsIcon/ButtonsIcons';


export const Button: React.FC<ButtonPropsType> = ({title, logo, styles, ...props}) => {

    const onClickHandler = () => {
        console.log("click");
    }

    return <>
        <button className={style.button} style={styles} onClick={onClickHandler}>
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
    onClick: () => void
}

type StylesPropsType = {
    backgroundColor?: string,
    border?: string,
    borderRadius?: string,
    width?: string,
    height?: string
}