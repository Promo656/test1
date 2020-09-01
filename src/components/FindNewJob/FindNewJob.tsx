import React from "react";
import s from "./FindNewJob.module.css"

export function FindNewJob() {
    return (
        <div>
            <div className={s.containerBlock}>
                <div className={s.presentBlock}>
                    <div className={s.text}>
                        Рассматриваю вариант удаленной работы
                    </div>
                    <div className={s.findMe}>
                        Найти меня
                    </div>
                </div>
            </div>
        </div>
    )
}