import s from "./Skills.module.css";
import React from "react";
import {Skill} from "./Skill/Skill";

export function Skills() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div className={s.header}>
                    <div className={s.text}>
                        General Skills
                    </div>
                </div>
                <div className={s.body}>
                    <div className={s.skillsBlock1}>
                        <Skill skillName={"HTML5"} percent={90}/>
                        <Skill skillName={"CSS3"} percent={80}/>
                        <Skill skillName={"Java Script"} percent={70}/>
                    </div>
                    <div className={s.skillsBlock2}>
                        <Skill skillName={"GIT"} percent={50}/>
                        <Skill skillName={"Type Script"} percent={70}/>
                        <Skill skillName={"React JS"} percent={70}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

