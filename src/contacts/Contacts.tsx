import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css';
import {Input} from './input/Input';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <form className={style.formContainer}>
                <Input/>
                <Input/>
                <textarea/>
            </form>
            <button>Send</button>
        </div>
        </div>
    )
}
