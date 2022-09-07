import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../../common/styles/Container.module.css';
import {Title} from '../../common/components/Title/Title';
import {TbBrandTelegram} from 'react-icons/tb';
import {FaInstagram, FaSkype} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io';
import {TiLocationOutline} from 'react-icons/ti';
import {FiPhoneCall} from 'react-icons/fi';
import {GoMail} from 'react-icons/go';
import {ContactsHeaderIcons} from '../../common/components/Icons/ContactsIcons/ContactsHeaderIcons/ContactsHeaderIcons';
import {ContactsBodyIcons} from '../../common/components/Icons/ContactsIcons/ContactsBodyIcons/ContactsBodyIcons';
import {Button} from '../../common/components/Button/Button';
import photo from '../../assets/photo/contactsPhoto.png'

export const Contacts = () => {

    const contactsPhoto = {backgroundImage:`url(${photo})`}

    return (
        <>
            <div className={style.contactsBlock} id='contacts' style={contactsPhoto}>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={'Contacts'}/>
                    <div className={style.addressContainer}>
                        <ContactsHeaderIcons
                            logo={<TiLocationOutline/>}
                            title={'Address'}
                            description={'Belarus, Minsk'}
                        />
                        <ContactsHeaderIcons
                            logo={<FiPhoneCall/>}
                            title={'Phone'}
                            description={'+375 (29) 582-91-59'}
                        />
                        <ContactsHeaderIcons
                            logo={<GoMail/>}
                            title={'Email'}
                            description={'sh.dg.msq@mail.ru'}
                        />
                    </div>
                    <div className={style.title}>
                        <h2>Let's Connect</h2>
                    </div>
                    <div className={style.contactIcons}>
                        <ContactsBodyIcons
                            title="Telegram" logoComponent={<TbBrandTelegram/>}
                        />
                        <ContactsBodyIcons
                            title="Instagram" logoComponent={<FaInstagram/>}
                        />
                        <ContactsBodyIcons
                            title="LinkedIn" logoComponent={<IoLogoLinkedin/>}
                        />
                        <ContactsBodyIcons
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
                    <div className={style.buttonContainer}>
                        <Button
                            title={'Send a message'}
                            styles={
                                {
                                    borderRadius: '2rem',
                                    width: '15rem',
                                    height: '4rem'
                                }
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
