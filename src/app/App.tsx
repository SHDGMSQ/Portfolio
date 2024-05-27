import React from "react";
import "./App.css";
import {Index} from "../pages/Index/Index";
import {Projects} from "../pages/Projects/Projects";
import {Skills} from "../pages/Skills/Skills";
import {Contacts} from "../pages/Contacts/Contacts";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {NotFound} from "../pages/NotFound/NotFound";
import {animated, useTransition} from "react-spring";
import {Header} from "../components/Header/Header";
import {Hire} from "../pages/AboutMe/Hire/Hire";
import {Footer} from "../components/Footer/Footer";
import {AboutMe} from "../pages/AboutMe/AboutMe";
import {Experience} from "../feautures/Experience/Experience";
import {ModalProvider} from "../contexts/AppContext";
import {Modal} from "../components/Modal/Modal";

export enum PATH {
  HOME = "/",
  INDEX = "/main",
  SKILLS = "/skills",
  PROJECTS = "/projects",
  CONTACTS = "/contacts",
  PAGE_NOT_FOUND = "/*",
}

export const App = () => {


  const location = useLocation();
  const transitions = useTransition(location, {
    config: {
      duration: 1000
    },
    from: {
      opacity: 0.1,
      transform: "translate3d(0px, 0px, 0px)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0px, 0px, 0px)"
    },

    /*leave: {
        opacity: 1,
        transform: 'translate3d(-1000px, 0px, 0px)'
    }*/
  });


  return <ModalProvider>
    <Modal />
    <Header/>
    <div style={{position: "relative", overflow: "hidden", minHeight: "90vh"}}>
      {transitions((props, item) =>
        <animated.div className="App" style={props}>
          <Routes location={item}>
            <Route path={PATH.HOME} element={<Navigate to={PATH.INDEX}/>}/>
            <Route path={PATH.INDEX} element={<Index/>}/>
            <Route path={PATH.SKILLS} element={<Skills/>}/>
            <Route path={PATH.PROJECTS} element={<Projects/>}/>
            <Route path={PATH.CONTACTS} element={<Contacts/>}/>
            <Route path={PATH.PAGE_NOT_FOUND} element={<NotFound/>}/>
          </Routes>
          <Skills/>
          <AboutMe/>
          <Hire/>
          {/*<Experience/>*/}
          <Projects/>
          <Contacts/>
          <Footer/>
        </animated.div>
      )}
    </div>
  </ModalProvider>;
};


