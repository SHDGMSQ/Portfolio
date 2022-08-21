import React, {ReactElement} from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/Title/Title';
import {TbBrandTelegram} from 'react-icons/tb';
import {FaInstagram} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io';
import {FaSkype} from 'react-icons/fa';
import {TiLocationOutline} from 'react-icons/ti';
import {FiPhoneCall} from 'react-icons/fi';
import {GoMail} from 'react-icons/go';
import {IconContext} from 'react-icons';
import {ContactHeaderIcons} from '../common/components/Icons/ContactsIcons/ContactsHeaderIcons/ContactsHeaderIcons';

export const Contacts = () => {


    return (
        <>
            <div className={style.contactsBlock}>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={'Contacts'}/>
                    <div className={style.adressContainer}>
                        <ContactHeaderIcons
                            logo={<TiLocationOutline/>}
                            title={'Address'}
                            description={'Belarus, Minsk'}
                        />
                        <ContactHeaderIcons
                            logo={<FiPhoneCall/>}
                            title={'Phone'}
                            description={'+375 (29) 582-91-59'}
                        />
                        <ContactHeaderIcons
                            logo={<GoMail/>}
                            title={'Email'}
                            description={'sh.dg.msq@mail.ru'}
                        />
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

//types
type ContactLabelPropsType = {
    title: string
    logoComponent: ReactElement
}