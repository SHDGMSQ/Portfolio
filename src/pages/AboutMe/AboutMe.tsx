import React from "react";
import style from "./AboutMe.module.scss";
import styleContainer from "../../styles/Container.module.css";
import {Title} from "../../components/Title/Title";
import {Button} from "../../components/Button/Button";
import {CgSoftwareDownload} from "react-icons/cg";
import {Contact} from "./Contact/Contact";

const transformColumns = (photos: Array<any>) => {
  const firstColOrder: Array<any> = [];

  photos.forEach((_, index) => {
    if (index % 3 === 0) {
      firstColOrder.push(index);
    }
  });

  return [
    photos.filter((_, index) => firstColOrder.includes(index)),
    photos.filter((_, index) => firstColOrder.map((i) => i + 1).includes(index)),
    photos.filter((_, index) => firstColOrder.map((i) => i + 2).includes(index))
  ];
};

export const AboutMe = () => {

  const photos = [
    {id: 1, src: "/Portfolio/assets/photos/1.jpg", pt: "133%"},
    {id: 2, src: "/Portfolio/assets/photos/2.jpg", pt: "100%"},
    {id: 3, src: "/Portfolio/assets/photos/3.jpg", pt: "133%"},
    {id: 4, src: "/Portfolio/assets/photos/4.jpg", pt: "100%"},
    {id: 5, src: "/Portfolio/assets/photos/5.jpg", pt: "133%"},
    {id: 6, src: "/Portfolio/assets/photos/6.jpg", pt: "100%"},
  ];

  return (
    <>
      <div className={style.aboutMe} id="aboutMe">
        <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
          <Title title={"About me"}/>
          <div className={style.innerContainer}>
            <div className={style.photosContainer}>
              {transformColumns(photos).map((col, index) => (
                <div className={style.column} key={index}>
                  {col.map((photo, i) => {
                    return (
                      <div className={style.photo} key={photo.id} style={{paddingTop: photo.pt}}>
                        <img src={photo.src}/>
                      </div>
                    );

                  })}
                </div>
              ))}
            </div>
            <div className={style.innerDescription}>
              <div className={style.title}><h4>Hi There!</h4></div>
              <div className={style.description}>
                I am a positive and result oriented front-end developer with experience
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
                <a href="/Portfolio/sv_shavlukevichFE.pdf" download="sv_shavlukevichFE.pdf"
                   style={{textDecoration: "none"}}>
                  <Button
                    title={"Download CV"}
                    logo={<CgSoftwareDownload/>}
                    styles={
                      {
                        backgroundColor: "black",
                        border: "1px solid white"
                      }
                    }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

