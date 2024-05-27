import React, {useContext} from "react";
import style from "./Hire.module.scss";
import styleContainer from "../../../styles/Container.module.css";
import {Button} from "../../../components/Button/Button";
import {MdArrowRightAlt} from "react-icons/md";
import {ModalContext} from "../../../contexts/AppContext";

export const Hire = () => {

  const {openModal} = useContext(ModalContext);

  //todo протестировать видна ли граница картинки в блоке на мобайле

  const clickHireHandler = () => {
    openModal();
  };

  return (
    <div className={style.hireBlock}>
      <div className={`${styleContainer.container} ${style.hireContainer}`}>
        <img src="/Portfolio/assets/images/keyboard.jpg"/>
        <h3 className={style.description}>Let's Work Together On Your Next Project!</h3>
        <Button title={"Hire Me"} onClick={clickHireHandler} logo={<MdArrowRightAlt/>}/>
      </div>
    </div>
  );
};