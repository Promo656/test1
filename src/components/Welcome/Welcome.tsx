import React from "react";
import s from "./Welcome.module.scss";
import foto from "./Photo.jpg"
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export function WelcomeBlock() {
    AOS.init({duration:1200})

    return (
        <div className={s.welcomeBlockBlock}>
            <div className={s.presentBlock}>
                <img className={s.img} src={foto} alt="" />
                <div className={s.description} >
                    <h3 className={s.name}>Egor Postnov</h3>
                    <p className={s.position}>frontend developer</p>
                    <div className={s.profileContacts}>
                        <dl className={s.contactList}>
                            <dt>Age:</dt>
                            <dd>23</dd>
                            <dt>Phone:</dt>
                            <dd>8 (234) 456-33-33</dd>
                            <dt>Email:</dt>
                            <dd>mail@mail.com</dd>
                            <dt>Address:</dt>
                            <dd>Melbourne Victoria 3000 Australia</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}