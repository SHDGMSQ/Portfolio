import React from "react";
import style from "./AboutMe.module.scss";
import styleContainer from "../../styles/Container.module.css";
import {Title} from "../../components/Title/Title";
import {Button} from "../../components/Button/Button";
import {BsArrowRightShort} from "react-icons/bs";
import {CgSoftwareDownload} from "react-icons/cg";
import {Contact} from "./Contact/Contact";
import photo from "../../assets/photo/my_photo.jpg";

export const AboutMe = () => {

//need to add photos

  const myPhoto = {
    backgroundImage: `url(${photo})`,
    //backgroundSize: "contain"
  };

  return (
    <>
      <div className={style.aboutMe} id="aboutMe">
        <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
          <Title title={"About me"}/>
          <div className={style.innerContainer}>
            <div className={style.photo} style={myPhoto}>
            </div>
            <div className={style.innerDescription}>
              <div className={style.title}><h4>Hi There!</h4></div>
              <div className={style.description}>I am a positive and result oriented front-end developer with experience
                building landing pages and SPA, using React (JS, TS), Redux, HTML and CSS (SCSS). I speak English at an
                Intermediate level. In my free time I improve my skills and English. I would like to find a project
                work/full-time job in a creative company with up-to-date task and collaborative team!
              </div>
              <div className={style.contactsContainer}>
                <div className={style.contacts}>
                  <div className={style.nameEmail}>
                    <Contact title={"Name:"} description={"Dmitry Shavlukevich"}/>
                    <Contact title={"Email:"} description={"sh.dg.msq@mail.ru"}/>
                  </div>
                  <div className={style.phone}>
                    <Contact
                      title={"Phone:"}
                      description={"+375 29 582-91-59"}
                    />
                    <Contact
                      title={"LinkedIn"}
                      description={"Dmitry Shavlukevich"}
                    />
                  </div>
                </div>
              </div>
              <div className={style.buttons}>
                <Button
                  title={"Download CV"}
                  logo={<CgSoftwareDownload/>}
                  onClick={() => {
                  }}
                  styles={
                    {
                      backgroundColor: "black",
                      border: "1px solid white"
                    }
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

