import React, {useContext} from "react";
import {ModalContext} from "../../contexts/AppContext";
import style from "./Modal.module.scss";
import {IoCloseCircleOutline} from "react-icons/io5";
import {FaTelegram} from "react-icons/fa";

export const Modal: React.FC = () => {
  const {isModalOpen, closeModal} = useContext(ModalContext);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={style.modalContainer} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <button className={style.closeButton} onClick={closeModal}>
          <IoCloseCircleOutline/>
        </button>

        <div className={style.inner}>
          <h3>Choose a way to connect!</h3>
          <p>One step left...</p>
          <p>Click on the icon where it will be most convenient for you to contact me.</p>
          <div className={style.icons}>
            <a href={"https://t.me/dmitry_shg"} target={"_blank"} rel={"noreferrer nofollow noopener"}>
              <FaTelegram/>
              <p>Telegram</p>
            </a>
            <a href={"https://www.instagram.com/dmitry_shavlukevich/"} target={"_blank"}
               rel={"noreferrer nofollow noopener"}>
              <img alt="" src="/Portfolio/assets/images/insta.png"/>
              <p>Instagram</p>
            </a>
            <a href={"https://www.linkedin.com/in/dmitry-shavlukevich-1a5572228/"} target={"_blank"}
               rel={"noreferrer nofollow noopener"}>
              <img alt="" src="/Portfolio/assets/images/linkedin.png"/>
              <p>LinkedIn</p>
            </a>
            <a href={"https://join.skype.com/invite/JipTwlMEQLa1"} target={"_blank"}
               rel={"noreferrer nofollow noopener"}>
              <img alt="" src="/Portfolio/assets/images/skype.png"/>
              <p>Skype</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};