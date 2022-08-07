import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';



export const Contacts = () => {
    return (
        <>
            <div className={style.contactsBlock}>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <h2 className={style.title}>Contacts</h2>
                    <form className={style.formContainer}>
                        <input className={style.input}/>
                        <input className={style.input}/>
                        <textarea className={style.input}/>
                    </form>
                    <button className={style.button}>Send</button>
                </div>
            </div>
        </>
    );
};
