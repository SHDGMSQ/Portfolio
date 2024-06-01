import React, {lazy, useContext, useEffect, useState} from "react";
import "./App.css";
import {NotFound} from "../pages/NotFound/NotFound";
import {animated, useSpring} from "react-spring";
import {Header} from "../components/Header/Header";
import {Hire} from "../pages/AboutMe/Hire/Hire";
import {Footer} from "../components/Footer/Footer";
import {Modal} from "../components/Modal/Modal";
import {Loader} from "../components/Loader/Loader";
import {Element} from "react-scroll";
import {LoaderContext} from "../contexts/LoaderContext";
import {ImageContext} from "../contexts/ImageContext";

const LazyIndexPage = lazy(() => import("../pages/Index/Index")
  .then((module) => ({default: module.Index})));
const LazyProjectsPage = lazy(() => import("../pages/Projects/Projects")
  .then((module) => ({default: module.Projects})));
const LazySkillsPage = lazy(() => import("../pages/Skills/Skills")
  .then((module) => ({default: module.Skills})));
const LazyContactsPage = lazy(() => import("../pages/Contacts/Contacts")
  .then((module) => ({default: module.Contacts})));
const LazyAboutMePage = lazy(() => import("../pages/AboutMe/AboutMe")
  .then((module) => ({default: module.AboutMe})));

export const App = () => {

  const {showLoader, hideLoader} = useContext(LoaderContext);
  const {allImagesUpload} = useContext(ImageContext);

  const [isVisible, setIsVisible] = useState(false);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  const animationStylesContent = useSpring({
    opacity: isVisible ? 1 : 0.1,
    transform: "translate3d(0px, 0px, 0px)",
    config: {duration: 500}

  });

  useEffect(() => {

    setIsVisible(true);

    const checkPath = () => {
      const validPath = ["#/index", "#/skills", "#/aboutMe", "#/projects", "#/contacts"];
      const path = window.location.hash;
      if (!validPath.includes(path)) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    };

    checkPath();

    window.addEventListener("hashchange", checkPath);

    return () => {
      window.removeEventListener("hashchange", checkPath);
    };
  }, []);

  useEffect(() => {
    if (!allImagesUpload) {
      showLoader();
    } else {
      hideLoader();
      document.body.style.overflow = "auto";
    }
  }, [allImagesUpload]);

  if (isNotFound) {
    return <NotFound/>;
  }

  return (
    <>
      <Modal/>
      <Loader/>;
      <Header/>;
      <div style={{position: "relative", overflow: "hidden", minHeight: "90vh"}}>
        <animated.div className="App" style={animationStylesContent}>
          <Element name="index">
            <LazyIndexPage/>
          </Element>
          <Element name="skills">
            <LazySkillsPage/>
          </Element>
          <Element name={"aboutMe"}>
            <LazyAboutMePage/>
            <Hire/>
          </Element>
          <Element name="projects">
            <LazyProjectsPage/>
          </Element>
          <Element name="contacts">
            <LazyContactsPage/>
          </Element>
          <Footer/>
        </animated.div>
      </div>;
    </>
  );
};


