import React, {useEffect} from 'react';
import './App.css';
import {Main} from './main/Main';
import {Projects} from './projects/Projects';
import {Skills} from './skills/Skills';
import {Contacts} from './contacts/Contacts';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {Error404} from './error404/Error404';
import {animated, useTransition} from 'react-spring';
import {Header} from './header/Header';

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

                    <div className='footer-swiper-pagination'>
                    <div className='swiper-pagination'>
                        <span className='swiper-pagination-bullet' style={{opacity: '1', transform: 'translate3d(0px, 0px, 0px)'}}>
                    <div className='parallax-wrap' style={{transform: 'translate(0px, 0px)'}}>
                        <div className='parallax-element' style={{transform: 'translate(0px, 0px)'}}>
                            <svg className='fp-arc-loader' viewBox='0 0 20 20'>
                                <circle className='path' cx='10' cy={10} r={5.5} fill='none' transform='rotate(-90 10 10)' strokeOpacity='1' strokeWidth='2px'>''</circle>
                                <circle className='solid-fill' cx='10' cy={10} r={3}>''</circle>
                            </svg>
                        </div>
                    </div>
                </span>
                    </div>
                    </div>
                </animated.div>
            )}
        </div>
    </>;
};


