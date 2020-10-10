import s from "./TechnicalSkills.module.scss";
import {TechnicalSkill} from "./TechnicalSkill/TechnicalSkill";
import React from "react";

export function TechnicalSkills() {
    return (
            <div className={s.technicalSkillsBlock} data-aos="fade-right">
                <p className={s.nameOfTechnicalSkills}>Technical Skills</p>
                <TechnicalSkill skillName={"HTML5"} percent={90}/>
                <TechnicalSkill skillName={"CSS3"} percent={80}/>
                <TechnicalSkill skillName={"Java Script"} percent={70}/>
                <TechnicalSkill skillName={"GIT"} percent={65}/>
                <TechnicalSkill skillName={"Type Script"} percent={70}/>
                <TechnicalSkill skillName={"React JS"} percent={70}/>
            </div>

    )
}