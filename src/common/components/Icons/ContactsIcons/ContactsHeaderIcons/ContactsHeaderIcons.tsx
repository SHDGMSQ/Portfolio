import React, {ReactElement} from 'react';
import {IconContext} from 'react-icons';
import style from './ContactsHeaderIcons.module.css'

export const ContactHeaderIcons: React.FC<ContactHeaderIconsPropsType> = ({logo, title, description}) => {
    return <>
        <IconContext.Provider value={{color: '#f26c4f', size: '3rem'}}>
            <div className={style.inner}>
                <div className={style.innerLogo}>{logo}</div>
                <div className={style.innerTitle}>{title}</div>
                <div className={style.innerDescription}>{description}</div>
            </div>
        </IconContext.Provider>
    </>
}

//type

type ContactHeaderIconsPropsType = {
    logo: ReactElement
    title: string
    description: string
}
