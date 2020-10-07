import React from "react";
import s from "./FindNewJob.module.scss"

export function FindNewJob() {
    return (
            <div className={s.containerBlock}>
                <div className={s.presentBlock}>
                    <div className={s.text}>
                        Рассматриваю вариант удаленной работы
                    </div>
                    <button className={s.btn}>
                        Найти меня
                    </button>
                </div>
            </div>
    )
}