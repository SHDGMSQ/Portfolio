import React from 'react';
import style from './Main.module.css';
import stylesContainer from './../common/styles/Container.module.css';


export const Main = () => {
    return (
        <>
            <div className={style.mainBlock}>
                <div className={stylesContainer.container}>

                        <div className={style.text}>
                            <h1>I am Dmitry Shavlukevich</h1>
                            <p className={style.description}>Frontend Developer</p>
                        </div>
                    </div>
                </div>
        </>
    );
};