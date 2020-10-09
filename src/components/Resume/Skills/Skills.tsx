import s from "./Skills.module.scss";
import React from "react";
import {Skill} from "./Skill/Skill";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export function Skills() {
    AOS.init({duration:1200})

    return (
        <div className={s.skillBlock}>
            <div className={s.presentBlock}>
                <p className={s.header}>General Skills</p>
                <div className={s.body}>
                    <div className={s.skillsBlock} data-aos="fade-right">
                        <Skill skillName={"HTML5"} percent={90}/>
                        <Skill skillName={"CSS3"} percent={80}/>
                        <Skill skillName={"Java Script"} percent={70}/>
                    </div>
                    <div className={s.skillsBlock} data-aos="fade-left">
                        <Skill skillName={"GIT"} percent={65}/>
                        <Skill skillName={"Type Script"} percent={70}/>
                        <Skill skillName={"React JS"} percent={70}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

