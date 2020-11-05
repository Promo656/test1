import s from "./ProfessionalSkills.module.scss";
import {ProfessionalSkill} from "./ProfessionalSkill/ProfessionalSkill";
import React from "react";

export function ProfessionalSkills() {
    return (
        <div className={s.professionalSkillsBlock} data-aos="fade-left">
            <p className={s.nameOfProfessionalSkills}>Professional Skills</p>
            <div className={s.skills}>
                <div className={s.wrap}>
                    <ProfessionalSkill nameOfSkill={"Communication"} percent={99}/>
                    <ProfessionalSkill nameOfSkill={"Team Work"} percent={90}/>
                </div>
                <div className={s.wrap}>
                    <ProfessionalSkill nameOfSkill={"Creativity"} percent={80}/>
                    <ProfessionalSkill nameOfSkill={"Project Management"} percent={85}/>
                </div>

            </div>
        </div>
    )
}