import React from "react";
import s from "./Skill.module.css"

export function Skill() {
    return (
        <div className={s.containerBlock}>
            <div className={s.header}>
                <div className={s.backgroundDecoration}></div>
                <div className={s.text}>React</div>
            </div>
            <div className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
        </div>
    )
}