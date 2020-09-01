import React from 'react';
import s from "./App.module.css"
import './App.module.css';
import {Header} from "./components/Header/Header";
import {WelcomeBlock} from "./components/Welcome/Welcome";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import {FindNewJob} from "./components/FindNewJob/FindNewJob";
import {ContactMe} from "./components/ContactMe/ContactMe";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={s.mainContainer}>
            <Header/>
            <WelcomeBlock/>
            <Skills/>
            <Works/>
            <FindNewJob/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App;

