import s from "./Skills.module.scss";
import React from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import {ProfessionalSkills} from "./ProfessionalSkills/ProfessionalSkills";
import {TechnicalSkills} from "./TechnicalSkills/TechnicalSkills";


export function Skills() {
    AOS.init({duration: 1200})

    return (
        <div className={s.skillsBlock}>
            <div className={s.presentBlock}>
                    <TechnicalSkills/>
                    <ProfessionalSkills/>
            </div>
        </div>
    )
}

