import React from 'react';
import style from './AboutMe.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/Title';

export const AboutMe = () => {


    return (
        <>
            <div className={style.aboutMe}>
                <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                    <Title title={'About me'}/>
                    <div className={style.innerContainer}>
                        <div className={style.photo}></div>
                        <div className={style.innerDescription}>
                            <div className={style.title}>HI</div>
                            <div className={style.description}>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo. Nulla in feugiat elit.</div>
                            <div className={style.contactsContainer}>
                                <div className={style.contacts}></div>
                            </div>
                            <div className={style.buttons}></div>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    );
};

//types
