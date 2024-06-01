import React from "react";
import style from "./AboutMe.module.scss";
import styleContainer from "../../styles/Container.module.css";
import {Title} from "../../components/Title/Title";
import {Button} from "../../components/Button/Button";
import {CgSoftwareDownload} from "react-icons/cg";
import {Contact} from "./Contact/Contact";
import {ImageComponent} from "../../components/ImageComponent";

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

  const text = "I've been developing for over 3 years. There is experience in developing projects, both from scratch, and experience in finalizing existing projects. Experience with both simple landings and complex architecture products."

  //const textArr = text.split(" ")

  return (
    <>
      <div className={style.aboutMe} id="aboutMe">
        <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
          <Title title={"About me"}/>
          <div className={style.innerContainer}>
            <div className={style.photosContainer}>
              {transformColumns(photos).map((col, index) => (
                <div className={style.column} key={index}>
                  {col.map((photo) => {
                    return (
                      <div className={style.photo} key={photo.id} style={{paddingTop: photo.pt}}>
                        <ImageComponent src={photo.src} />
                        {/*<img src={photo.src}/>*/}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className={style.innerDescription}>
              <div className={style.title}><h4>Hi There!</h4></div>
              <div className={style.description}>
                {/*{textArr.map((symbol, index) => (*/}
                {/*  <React.Fragment key={index}>*/}
                {/*    <span style={{*/}
                {/*      animationDuration: "0.8s",*/}
                {/*      animationDelay: `${0.01 * index}s`,*/}
                {/*      animationTimingFunction: "cubic-bezier(0.11, 0, 0.5, 0)",*/}
                {/*      animationFillMode: "forwards"*/}
                {/*    }}>{symbol}{' '}*/}
                {/*  </span>*/}
                {/*    {index < textArr.length - 1 && <span key={`space-${index}`}> </span>}*/}
                {/*  </React.Fragment>*/}
                {/*))}*/}
                {text}
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

