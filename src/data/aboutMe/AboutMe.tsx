import React from 'react';
import style from './AboutMe.module.scss';
import styleContainer from '../../common/styles/Container.module.css';
import {Title} from '../../common/components/Title/Title';
import {Button} from '../../common/components/Button/Button';
import {BsArrowRightShort} from 'react-icons/bs';
import {CgSoftwareDownload} from 'react-icons/cg';
import {AboutMeContact} from './aboutMeContact/AboutMeContact';
import photo from '../../assets/photo/my_photo.jpg';

export const AboutMe = () => {



    const myPhoto = {
        backgroundImage: `url(${photo})`
    };

    return (
        <>
            <div className={style.aboutMe} id='aboutMe'>
                <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                    <Title title={'About me'}/>
                    <div className={style.innerContainer}>
                            <div className={style.photo} style={myPhoto}>
                        </div>
                        <div className={style.innerDescription}>
                            <div className={style.title}><h4>Hi There</h4></div>
                            <div className={style.description}>I am a positive and result oriented front-end developer with experience building landing pages and SPA, using React (JS, TS), Redux, HTML and CSS (SCSS). I speak English at an Intermediate level. In my free time I improve my skills and English. I would like to find a project work/full-time job in a creative company with up-to-date task and collaborative team!
                            </div>
                            <div className={style.contactsContainer}>
                                <div className={style.contacts}>
                                    <div className={style.nameEmail}>
                                        <AboutMeContact title={'Name:'} description={'Dmitry Shavlukevich'}/>
                                        <AboutMeContact title={'Email:'} description={'sh.dg.msq@mail.ru'}/>
                                    </div>
                                    <div className={style.phone}>
                                        <AboutMeContact
                                            title={'Phone:'}
                                            description={'+375 29 582-91-59'}
                                        />
                                        <AboutMeContact
                                            title={'LinkedIn'}
                                            description={'Dmitry Shavlukevich'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={style.buttons}>
                                <div className={style.firstButton}>
                                    <Button
                                        title={'Contact Me'}
                                        logo={<BsArrowRightShort/>}
                                    />
                                </div>
                                <div>
                                    <Button
                                        title={'Download CV'}
                                        logo={<CgSoftwareDownload/>}
                                        styles={
                                            {
                                                backgroundColor: 'black',
                                                border: '1px solid white'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

