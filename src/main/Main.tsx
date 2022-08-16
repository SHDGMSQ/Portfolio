import React, {ReactElement} from 'react';
import style from './Main.module.css';
import stylesContainer from './../common/styles/Container.module.css';
import {IconContext} from 'react-icons';
import {TbBrandTelegram} from 'react-icons/tb';
import {FaInstagram, FaSkype} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io';


export const Main = () => {
    return (
        <>
            <div className={style.mainBlock}>
                <div className={stylesContainer.container}>
                    <div className={style.mainContainer}>
                        <div className={style.contacts}>
                            <MainContactLabel
                                logoComponent={<TbBrandTelegram/>}
                            />
                            <MainContactLabel
                                logoComponent={<FaInstagram/>}
                            />
                            <MainContactLabel
                                logoComponent={<IoLogoLinkedin/>}
                            />
                            <MainContactLabel
                                logoComponent={<FaSkype/>}
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

const MainContactLabel: React.FC<MainContactLabelPropsType> = (
    {logoComponent}
) => {
    return <>
        <IconContext.Provider value={{size: '1.2rem'}}>
            <div className={style.contactIcon}>
                <div className={style.label}>
                    {logoComponent}
                </div>
            </div>
        </IconContext.Provider>
    </>;
};

type MainContactLabelPropsType = {
    logoComponent: ReactElement
}