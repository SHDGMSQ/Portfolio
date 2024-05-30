import React, {useContext} from "react";
import style from "./Loader.module.scss"
import {LoaderContext} from "../../contexts/LoaderContext";

export const Loader = () => {

  const { isShowLoader } = useContext(LoaderContext)

  if (!isShowLoader) {
    return  null;
  }

  return <div className={style.loader}>
    <div className={style.loaderInner}></div>
  </div>
}
