import React, {ReactElement} from 'react';
import {IconContext} from 'react-icons';
import style from './MainIcons.module.scss';

export const MainIcons: React.FC<MainIconsPropsType> = (
    {logoComponent, path}
) => {
    
    return <>
        <a href={path} target={'_blank'} rel={'noreferrer nofollow noopener'}>
        <IconContext.Provider value={{size: '1.2rem'}}>
                <div className={style.label}>
                    {logoComponent}
                </div>
        </IconContext.Provider>
        </a>
    </>;
};

//type
type MainIconsPropsType = {
    logoComponent: ReactElement
    path: string
}
