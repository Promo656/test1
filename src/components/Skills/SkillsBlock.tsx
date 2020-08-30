import s from "./SkillsBlock.module.css";
import React from "react";
import {Skill} from "./Skill/Skill";

export function SkillsBlock() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div className={s.header}>
                    <div className={s.text}>
                        Мои скиллы
                    </div>
                </div>
                <div className={s.body}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    )
}

