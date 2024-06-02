import React, {useContext} from "react";
import style from "./Hire.module.scss";
import styleContainer from "../../../styles/Container.module.css";
import {Button} from "../../../components/Button/Button";
import {MdArrowRightAlt} from "react-icons/md";
import {Links} from "../../../components/Modal/Links/Links";
import keyboard from "../../../assets/images/keyboard.jpg";
import {ModalContext} from "../../../contexts/ModalContext";
import {ImageComponent} from "../../../components/ImageComponent";

const modalContent = <div className={style.inner}>
  <h3>Choose a way to connect!</h3>
  <p>One step left...</p>
  <p>Click on the icon where it will be most convenient for you to contact me.</p>
  <Links/>
</div>;

export const Hire = () => {

  const {openModal} = useContext(ModalContext);

  const clickHireHandler = () => {
    console.log(modalContent);
    openModal(modalContent);
  };

  return (
    <div className={style.hireBlock}>
      <div className={`${styleContainer.container} ${style.hireContainer}`}>
        <ImageComponent src={keyboard} />
        <h3 className={style.description}>Let's Work Together On Your Next Project!</h3>
        <Button title={"Hire Me"} onClick={clickHireHandler} logo={<MdArrowRightAlt/>}/>
      </div>
    </div>
  );
};