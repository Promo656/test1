import React from "react";
import s from "../Employment/Employment.module.css";

export function Employment() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <p className={s.header}>Employment</p>
                <div className={s.body}>
                    <div className={s.firstPlace}>
                        <p className={s.placesName}>APPLE</p>
                        <p className={s.yearsPeriod}>2006 - 2010</p>
                        <p className={s.description}>Senior Full Stack Developer</p>
                    </div>
                    <div className={s.secondPlace}>
                        <p className={s.placesName}>TECH UNIVERSITY</p>
                        <p className={s.yearsPeriod}>2004 - 2005</p>
                        <p className={s.description}>
                            Awesome developer, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius-
                            mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        </p>
                    </div>
                    <div className={s.thirdPlace}>
                        <p className={s.placesName}>MOLLY’S STUDIO</p>
                        <p className={s.yearsPeriod}>2003 - 2006</p>
                        <p className={s.description}>
                            Programmer Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor
                            incididunt ut
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}