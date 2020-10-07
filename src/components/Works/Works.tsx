import React from "react";
import s from "./Works.module.scss"
import {Work} from "./Work/Work";

export function Works() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <p className={s.header}>My Project</p>
                <div className={s.body}>
                    <Work/>
                    <Work/>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    )
}

