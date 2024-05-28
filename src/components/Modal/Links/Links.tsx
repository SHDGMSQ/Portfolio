import React from "react";
import style from "./Links.module.scss"
import {FaTelegram} from "react-icons/fa";
import instaIcon from "../../../assets/images/insta.png"
import linkedIcon from "../../../assets/images/linkedin.png"
import skypeIcon from "../../../assets/images/skype.png"

const rel = "noreferrer nofollow noopener";

export const Links = () => {

  return (
    <div className={style.icons}>
      <a href={"https://t.me/dmitry_shg"} target={"_blank"} rel={rel}>
        <FaTelegram/>
        <p>Telegram</p>
      </a>
      <a href={"https://www.instagram.com/dmitry_shavlukevich/"} target={"_blank"}
         rel={rel}>
        <img alt="" src={instaIcon}/>
        <p>Instagram</p>
      </a>
      <a href={"https://www.linkedin.com/in/dmitry-shavlukevich-1a5572228/"} target={"_blank"}
         rel={rel}>
        <img alt="" src={linkedIcon}/>
        <p>LinkedIn</p>
      </a>
      <a href={"https://join.skype.com/invite/JipTwlMEQLa1"} target={"_blank"}
         rel={rel}>
        <img alt="" src={skypeIcon}/>
        <p>Skype</p>
      </a>
    </div>
  )
}