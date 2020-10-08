import React from "react";
import s from "./FindNewJob.module.scss"

export function FindNewJob() {
    return (
            <div className={s.findNewJobBlock}>
                <div className={s.presentBlock}>
                    <span className={s.text}>
                        Рассматриваю вариант удаленной работы
                    </span>
                    <button className={s.btn}>
                        Найти меня
                    </button>
                </div>
            </div>
    )
}