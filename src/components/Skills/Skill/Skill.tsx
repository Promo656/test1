import React from "react";
import s from "./Skill.module.css"
import {Progress} from "semantic-ui-react";

type PropsType={
    skillName:string
    percent:number
}

export function Skill(props:PropsType) {
    return (
        /*<div className={s.containerBlock}>
            <div className={s.header}>
                <div className={s.backgroundDecoration}></div>
                <div className={s.text}>React</div>
            </div>
            <div className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
        </div>*/
        <div>
            <p>{props.skillName}</p>
            <Progress
                className={s.progress}
                percent={props.percent}
                color={"violet"}
                size={"small"}
                progress={"percent"}
                active
            />
        </div>
    )
}