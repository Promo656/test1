import React from "react";
import s from "./ContactMe.module.css"

export function ContactMe() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div className={s.contact}>
                    Контакты
                </div>
                <form className={s.form}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"E-mail"}/>
                    <input className={s.message} type="text" placeholder={"Your message"}/>
                </form>
                <button className={s.btn}>
                    Отправить
                </button>
            </div>
        </div>
    )
}