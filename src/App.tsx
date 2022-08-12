import React from 'react';
import './App.css';
import {Main} from './main/Main';
import {Projects} from './projects/Projects';
import {Skills} from './skills/Skills';
import {Contacts} from './contacts/Contacts';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {Error404} from './error404/Error404';
import {animated, useTransition} from 'react-spring';
import {Header} from './header/Header';
import {HireScope} from './hireScope/HireScope';
import {Footer} from './footer/Footer';

export enum PATH {
    HOME = '/',
    MAIN = '/main',
    SKILLS = '/skills',
    PROJECTS = '/projects',
    CONTACTS = '/contacts',
    PAGE_NOT_FOUND = '/*',
}

//styles

export const App = () => {


    const location = useLocation();
    const transitions = useTransition(location, {
        config: {
          duration: 1000
        },
        from: {
            opacity: 0.1,
            transform: 'translate3d(0px, 0px, 0px)'
        },
        enter: {
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px)'
        },

        /*leave: {
            opacity: 1,
            transform: 'translate3d(-1000px, 0px, 0px)'
        }*/
    });


    return <>
        <Header/>
        <div style={{position: 'relative', overflow: 'hidden', minHeight: '90vh'}}>
            {transitions((props, item) =>
                <animated.div className="App" style={props}>
                    <Routes location={item}>
                        <Route path={PATH.HOME} element={<Navigate to={PATH.MAIN}/>}/>
                        <Route path={PATH.MAIN} element={<Main/>}/>
                        <Route path={PATH.SKILLS} element={<Skills/>}/>
                        <Route path={PATH.PROJECTS} element={<Projects/>}/>
                        <Route path={PATH.CONTACTS} element={<Contacts/>}/>
                        <Route path={PATH.PAGE_NOT_FOUND} element={<Error404/>}/>
                    </Routes>
                    <Skills/>
                    <HireScope/>
                    <Projects/>
                    <Contacts/>
                    <Footer/>
                </animated.div>
            )}
        </div>
    </>;
};


