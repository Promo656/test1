import React from "react";
import s from "./Works.module.css"
import {Work} from "./Work/Work";

export function Works() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div className={s.header}>
                    <div className={s.text}>
                        Мои работы
                    </div>
                </div>
                <div className={s.body}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    )
}

