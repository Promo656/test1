import React from 'react';
import s from "./App.module.css"
import './App.module.css';
import {Header} from "./components/Header/Header";
import {WelcomeBlock} from "./components/Welcome/Welcome";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";

function App() {
    return (
        <div className={s.mainContainer}>
            <Header/>
            <WelcomeBlock/>
            <Skills/>
            <Works/>
            <div className={s.block4}></div>
            <div className={s.block5}></div>
            <div className={s.footer}></div>
        </div>
    );
}

export default App;

