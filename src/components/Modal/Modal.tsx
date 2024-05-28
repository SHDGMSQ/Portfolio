import React, {useContext} from "react";
import {ModalContext} from "../../contexts/AppContext";
import style from "./Modal.module.scss";
import {IoCloseCircleOutline} from "react-icons/io5";

export const Modal: React.FC = () => {
  const {isModalOpen, modalContent, closeModal} = useContext(ModalContext);

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
        {modalContent}
      </div>
    </div>
  );
};