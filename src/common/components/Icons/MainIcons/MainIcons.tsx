import React, {ReactElement} from 'react';
import {IconContext} from 'react-icons';
import style from './MainIcons.module.css';

export const MainIcons: React.FC<MainIconsPropsType> = (
    {logoComponent}
) => {
    return <>
        <IconContext.Provider value={{size: '1.2rem'}}>
            <div className={style.contactIcon}>
                <div className={style.label}>
                    {logoComponent}
                </div>
            </div>
        </IconContext.Provider>
    </>;
};

//type

type MainIconsPropsType = {
    logoComponent: ReactElement
}
