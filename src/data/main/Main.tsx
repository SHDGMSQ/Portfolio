import React from 'react';
import style from './Main.module.scss';
import stylesContainer from '../../common/styles/Container.module.css';
import {TbBrandTelegram} from 'react-icons/tb';
import {FaInstagram, FaSkype} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {MainIcons} from '../../common/components/Icons/MainIcons/MainIcons';


export const Main = () => {
    return (
        <>
            <div className={style.mainBlock}>
                <div className={stylesContainer.container}>
                    <div className={style.mainContainer}>
                        <div className={style.contacts}>
                            <MainIcons
                                logoComponent={<TbBrandTelegram/>}
                            />
                            <MainIcons
                                logoComponent={<FaInstagram/>}
                            />
                            <MainIcons
                                logoComponent={<IoLogoLinkedin/>}
                            />
                            <MainIcons
                                logoComponent={<FaSkype/>}
                            />
                            <MainIcons
                                logoComponent={<BsGithub/>}
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

