import React, {ReactElement} from 'react';
import {IconContext} from 'react-icons';
import style from './ContactsBodyIcons.module.scss';

export const ContactsBodyIcons: React.FC<ContactsBodyIconsPropsType> = (
    {title, logoComponent}
) => {
    return <>
        <IconContext.Provider value={{color: 'white', size: '1.5rem'}}>
            <div className={style.contactIcon}>
                <div className={style.label}>
                    {logoComponent}
                </div>
                <span className={style.text}>{title}</span>
            </div>
        </IconContext.Provider>
    </>;
};

//types
type ContactsBodyIconsPropsType = {
    title: string
    logoComponent: ReactElement
}
