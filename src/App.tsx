import React from 'react';
import s from "./App.module.css"
import './App.module.css';
import {Header} from "./components/Header/Header";
import {WelcomeBlock} from "./components/Welcome/Welcome";
import {SkillsBlock} from "./components/Skills/SkillsBlock";

function App() {
    return (
        <div className={s.mainContainer}>
            <Header/>
            <WelcomeBlock/>
            <SkillsBlock/>
            <div className={s.block3}></div>
            <div className={s.block4}></div>
            <div className={s.block5}></div>
            <div className={s.footer}></div>
        </div>
    );
}

export default App;

