import React from "react";
import s from "./Work.module.css";

export function Work() {
    return (
        <div className={s.containerBlock}>
            <div className={s.header}>
                <button className={s.btn}>
                    Смотреть
                </button>
            </div>
            <div className={s.about}>
                <div className={s.name}>
                    Social Network
                </div>
                <div className={s.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </div>
        </div>
    )
}