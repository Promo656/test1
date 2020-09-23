import React from 'react';
import s from "./App.module.css"
import './App.module.css';
import {WelcomeBlock} from "./components/Welcome/Welcome";
import {Works} from "./components/Works/Works";
import {FindNewJob} from "./components/FindNewJob/FindNewJob";
import {ContactMe} from "./components/ContactMe/ContactMe";
import {Footer} from "./components/Footer/Footer";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Resume} from "./components/Resume/Resume";

function App() {
    return (
        <div className={s.mainContainer}>
            <WelcomeBlock/>
            <AboutMe/>
            <Resume/>
            <Works/>
            <FindNewJob/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App;

