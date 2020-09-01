import React from "react";
import s from "./Footer.module.css"

export function Footer() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div className={s.name}>
                    Егор Постнов
                </div>
                <div className={s.block}>
                    <div className={s.miniBlock}></div>
                    <div className={s.miniBlock}></div>
                    <div className={s.miniBlock}></div>
                    <div className={s.miniBlock}></div>
                </div>
                <div className={s.text}>
                    2020 Все права защищены
                </div>
            </div>
        </div>
    )
}