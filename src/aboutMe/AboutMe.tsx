import React from 'react';
import style from './AboutMe.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/Title/Title';
import {Button} from '../common/components/Button/Button';
import {BsArrowRightShort} from 'react-icons/bs';
import {CgSoftwareDownload} from 'react-icons/cg';
import {ButtonsIcons} from '../common/components/Icons/ButtonsIcon/ButtonsIcons';

export const AboutMe = () => {


    return (
        <>
            <div className={style.aboutMe}>
                <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                    <Title title={'About me'}/>
                    <div className={style.innerContainer}>
                        <div className={style.photo}></div>
                        <div className={style.innerDescription}>
                            <div className={style.title}><h4>Hi There</h4></div>
                            <div className={style.description}>In id nulla magna. Nullam posuere fermentum mattis. Nunc
                                id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur
                                sagittis, urna est ultricies eros, ac porta sem turpis quis leo. Nulla in feugiat elit.
                            </div>
                            <div className={style.contactsContainer}>
                                <div className={style.contacts}>
                                    <div>
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

const AboutMeContact: React.FC<AboutMeContact> = ({title, description}) => {
    return <>
        <div className={style.contactTitle}>
            {title}
        </div>
        <div className={style.contactDescription}>
            {description}
        </div>
    </>;
};

//types
type AboutMeContact = {
    title: string
    description: string
}