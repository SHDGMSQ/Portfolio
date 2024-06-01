import React, {useContext, useEffect, useState} from "react";
import "./App.css";
import {Index} from "../pages/Index/Index";
import {Projects} from "../pages/Projects/Projects";
import {Skills} from "../pages/Skills/Skills";
import {Contacts} from "../pages/Contacts/Contacts";
import {NotFound} from "../pages/NotFound/NotFound";
import {animated, useSpring} from "react-spring";
import {Header} from "../components/Header/Header";
import {Hire} from "../pages/AboutMe/Hire/Hire";
import {Footer} from "../components/Footer/Footer";
import {AboutMe} from "../pages/AboutMe/AboutMe";
import {Modal} from "../components/Modal/Modal";
import {Loader} from "../components/Loader/Loader";
import {Element} from "react-scroll";
import {LoaderContext} from "../contexts/LoaderContext";
import {ImageContext} from "../contexts/ImageContext";

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
            <Index/>
          </Element>
          <Element name="skills">
            <Skills/>
          </Element>
          <Element name={"aboutMe"}>
            <AboutMe/>
            <Hire/>
          </Element>
          <Element name="projects">
            <Projects/>
          </Element>
          <Element name="contacts">
            <Contacts/>
          </Element>
          <Footer/>
        </animated.div>
      </div>;
    </>
  );
};


