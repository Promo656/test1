import {Progress} from "antd";
import React from "react";
import s from "./ProfessionalSkill.module.scss"

type ProfessionalSkillType = {
    percent: number
    nameOfSkill: string
}

export function ProfessionalSkill(props: ProfessionalSkillType) {
    return (
        <div className={s.wrap}>
            <Progress type="circle" percent={props.percent}/>
            <p>{props.nameOfSkill}</p>
        </div>
    )
}