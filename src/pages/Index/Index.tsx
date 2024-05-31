import React from "react";
import style from "./Index.module.scss";
import stylesContainer from "../../styles/Container.module.css";
import {TbBrandTelegram} from "react-icons/tb";
import {FaInstagram, FaWhatsapp} from "react-icons/fa";
import {IoLogoLinkedin} from "react-icons/io";
import {BsGithub} from "react-icons/bs";
import {IndexIcons} from "../../components/Icons/IndexIcons/IndexIcons";


export const Index = () => {

  return (
    <>
      <div className={style.indexPage} id="index">
        <img src="/Portfolio/assets/photos/main.jpg" alt=""/>
        <div className={stylesContainer.container}>
          <div className={style.indexContainer}>
            <div className={style.contacts}>
              <IndexIcons
                logoComponent={<TbBrandTelegram/>}
                path={"https://t.me/dmitry_shg"}
              />
              <IndexIcons
                logoComponent={<FaInstagram/>}
                path={"https://www.instagram.com/dmitry_shavlukevich/"}
              />
              <IndexIcons
                logoComponent={<IoLogoLinkedin/>}
                path={"https://www.linkedin.com/in/dmitry-shavlukevich-1a5572228/"}
              />
              <IndexIcons
                logoComponent={<FaWhatsapp/>}
                path={"https://api.whatsapp.com/send?phone=375295829159"}
              />
              <IndexIcons
                logoComponent={<BsGithub/>}
                path={"https://github.com/SHDGMSQ"}
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

