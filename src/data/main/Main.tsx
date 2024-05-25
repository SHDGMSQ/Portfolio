import React from 'react';
import style from './Main.module.scss';
import stylesContainer from '../../common/styles/Container.module.css';
import {TbBrandTelegram} from 'react-icons/tb';
import {FaInstagram, FaWhatsapp} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {MainIcons} from '../../common/components/Icons/MainIcons/MainIcons';
import photo from '../../assets/photo/main.jpg'


export const Main = () => {

    const mainPhoto = {backgroundImage:`url(${photo})`}

    return (
        <>
            <div className={style.mainBlock} id='main' style={mainPhoto}>
                <div className={stylesContainer.container}>
                    <div className={style.mainContainer}>
                        <div className={style.contacts}>
                            <MainIcons
                                logoComponent={<TbBrandTelegram/>}
                                path={'https://t.me/dmitry_shg'}
                            />
                            <MainIcons
                                logoComponent={<FaInstagram/>}
                                path={'https://www.instagram.com/dmitry_shavlukevich/'}
                            />
                            <MainIcons
                                logoComponent={<IoLogoLinkedin/>}
                                path={'https://www.linkedin.com/in/dmitry-shavlukevich-1a5572228/'}
                            />
                            <MainIcons
                                logoComponent={<FaWhatsapp/>}
                                path={'https://api.whatsapp.com/send?phone=375295829159'}
                            />
                            <MainIcons
                                logoComponent={<BsGithub/>}
                                path={'https://github.com/SHDGMSQ'}
                            />
                        </div>
                        <div className={style.text}>
                            <h2>I am Dmitry <span>Shavlukevich</span></h2>
                            <h2 className={style.description}>Frontend Developer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

