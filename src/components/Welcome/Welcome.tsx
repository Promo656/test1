import s from "./Welcome.module.css";
import React from "react";

export function WelcomeBlock() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div className={s.text}>
                    Привет!<br/>
                    Меня зовут Егор Постнов.<br/>
                    Я Front-end разработчик.
                </div>
                <div className={s.backgroundDecoration}>
                </div>
            </div>
        </div>
    )
}