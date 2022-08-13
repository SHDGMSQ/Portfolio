import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/Title';


export const Contacts = () => {
    return (
        <>
            <div className={style.contactsBlock}>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={'Contacts'}/>
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
                        {/*<div className={style.button}></div>*/}
                    </form>
                    {/*<button className={style.button}>Send</button>*/}
                </div>
            </div>
        </>
    );
};
