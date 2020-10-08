import s from "./Skills.module.scss";
import React from "react";
import {Skill} from "./Skill/Skill";

export function Skills() {
    return (
        <div className={s.skillBlock}>
            <div className={s.presentBlock}>
                <p className={s.header}>General Skills</p>
                <div className={s.body}>
                    <div className={s.skillsBlock}>
                        <Skill skillName={"HTML5"} percent={90}/>
                        <Skill skillName={"CSS3"} percent={80}/>
                        <Skill skillName={"Java Script"} percent={70}/>
                    </div>
                    <div className={s.skillsBlock}>
                        <Skill skillName={"GIT"} percent={65}/>
                        <Skill skillName={"Type Script"} percent={70}/>
                        <Skill skillName={"React JS"} percent={70}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

