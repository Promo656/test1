import React from 'react';
import s from "./App.module.scss"
import {WelcomeBlock} from "./components/Welcome/Welcome";
import {Projects} from "./components/Works/Works";
import {FindNewJob} from "./components/FindNewJob/FindNewJob";
import {ContactMe} from "./components/ContactMe/ContactMe";
import {Footer} from "./components/Footer/Footer";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Header} from "./components/Header/Header";
import {Education} from "./components/Education/Education";
import {Employment} from "./components/Employment/Employment";
import {Skills} from "./components/Skills/Skills";


function App() {
    return (
        <div className={s.mainContainer}>
            <Header/>
            <WelcomeBlock/>
            <AboutMe/>
            <Education/>
            <Employment/>
            <Skills/>
            <Projects/>
            <FindNewJob/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App;

