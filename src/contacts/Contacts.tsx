import React, {ReactElement} from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/Title';
import {TbBrandTelegram} from 'react-icons/tb';
import {FaInstagram} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io';
import {FaSkype} from 'react-icons/fa';
import {TiLocationOutline} from 'react-icons/ti';
import {FiPhoneCall} from 'react-icons/fi';
import {GoMail} from 'react-icons/go';
import {IconContext} from 'react-icons';

export const Contacts = () => {


    return (
        <>
            <div className={style.contactsBlock}>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={'Contacts'}/>
                    <div className={style.adressContainer}>
                        <ContactHeader logo={<TiLocationOutline/>} title={'Address'} description={'Belarus, Minsk'}/>
                        <ContactHeader logo={<FiPhoneCall/>} title={'Phone'} description={'+375 (29) 582-91-59'}/>
                        <ContactHeader logo={<GoMail/>} title={'Email'} description={'sh.dg.msq@mail.ru'}/>
                    </div>
                    <div className={style.title}>
                        <h2>Let's Connect</h2>
                    </div>
                    <div className={style.contactIcons}>
                        <ContactLabel
                            title="Telegram" logoComponent={<TbBrandTelegram/>}
                        />
                        <ContactLabel
                            title="Instagram" logoComponent={<FaInstagram/>}
                        />
                        <ContactLabel
                            title="LinkedIn" logoComponent={<IoLogoLinkedin/>}
                        />
                        <ContactLabel
                            title="Skype" logoComponent={<FaSkype/>}
                        />
                    </div>
                    <div className={style.title}>
                        <h2>Send me a message</h2>
                    </div>
                    <form className={style.formContainer}>
                        <div className={style.nameEmail}>
                            <div className={style.name}>
                                <span>Name *</span>
                                <input/>
                            </div>
                            <div className={style.email}>
                                <span>Email *</span>
                                <input/>
                            </div>
                        </div>
                        <div className={style.subject}>
                            <span>Subject *</span>
                            <input/>
                        </div>
                        <div className={style.message}>
                            <span>Message *</span>
                            <textarea/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

const ContactLabel: React.FC<ContactLabelPropsType> = (
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

const ContactHeader: React.FC<ContactHeaderPropsType> = ({logo, title, description}) => {
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

//types
type ContactLabelPropsType = {
    title: string
    logoComponent: ReactElement
}
type ContactHeaderPropsType = {
    logo: ReactElement
    title: string
    description: string
}