import s from "./Header.module.css";
import React from "react";

export function Header() {
    return (
        <div className={s.containerBlock}>
            <div className={s.headerMenu}>
                <div><a href="#">Главная</a></div>
                <div><a href="#">Скиллы</a></div>
                <div><a href="#">Работы</a></div>
                <div><a href="#">Контакты</a></div>
            </div>
        </div>
    )
}