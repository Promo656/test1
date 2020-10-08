import React from "react";
import s from "./Works.module.scss"
import {Project} from "./Work/Work";

export function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={s.presentBlock}>
                <p className={s.header}>My Project</p>
                <div className={s.body}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    )
}

