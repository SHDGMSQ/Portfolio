import React, {ReactElement} from 'react';
import {IconContext} from 'react-icons';
import style from './IndexIcons.module.scss';

export const IndexIcons: React.FC<IndexIconsPropsType> = (
    {logoComponent, path}
) => {
    
    return <>
        <a href={path} target={'_blank'} rel={'noreferrer nofollow noopener'}>
        <IconContext.Provider value={{size: '1.5rem'}}>
                <div className={style.label}>
                    {logoComponent}
                </div>
        </IconContext.Provider>
        </a>
    </>;
};

//type
type IndexIconsPropsType = {
    logoComponent: ReactElement
    path: string
}
