import React, {useContext} from "react";
import style from "./Hire.module.scss";
import styleContainer from "../../../styles/Container.module.css";
import {Button} from "../../../components/Button/Button";
import {MdArrowRightAlt} from "react-icons/md";
import {ModalContext} from "../../../contexts/AppContext";
import {FaTelegram} from "react-icons/fa";
import {Links} from "../../../components/Modal/Links/Links";
import keyboard from "../../../assets/images/keyboard.jpg"

const modalContent = <div className={style.inner}>
  <h3>Choose a way to connect!</h3>
  <p>One step left...</p>
  <p>Click on the icon where it will be most convenient for you to contact me.</p>
  <Links />
</div>

export const Hire = () => {

  const {openModal} = useContext(ModalContext);

  //todo 1) не виден лоадер, переделать! 2) кнопка download нужно шрифт уменьшить чтобы влазил и текст и иконка, 3) центрирование letsconnect кнопок, 4) бургер меню, 5) страница проектов, 6) мб анимация скроллинга, 7) анимация отрисовки полоски в хедере и мб анимация скейлинга

  const clickHireHandler = () => {
    openModal(modalContent);
  };

  return (
    <div className={style.hireBlock}>
      <div className={`${styleContainer.container} ${style.hireContainer}`}>
        <img src={keyboard}/>
        <h3 className={style.description}>Let's Work Together On Your Next Project!</h3>
        <Button title={"Hire Me"} onClick={clickHireHandler} logo={<MdArrowRightAlt/>}/>
      </div>
    </div>
  );
};