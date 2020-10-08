import React from "react";
import s from "./Footer.module.scss"

export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={s.presentBlock}>
                <span className={s.name}>Егор Постнов</span>
                <div className={s.block}>
                    <div className={s.miniBlock}></div>
                    <div className={s.miniBlock}></div>
                    <div className={s.miniBlock}></div>
                    <div className={s.miniBlock}></div>
                </div>
                <div className={s.text}>2020 Все права защищены</div>
            </div>
        </div>
    )
}