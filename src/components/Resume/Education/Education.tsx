import React from "react";
import s from "./Education.module.scss";


export function Education() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <p className={s.header}>Education</p>
                <div className={s.body}>
                    <div className={s.firstPlace}>
                        <p className={s.placesName}>UNIVERSITY OF MINNESOTA TWIN CITIES</p>
                        <p className={s.yearsPeriod}>2006 - 2010</p>
                        <p className={s.description}>Bachelor Computer Engineering Lorem</p>
                    </div>
                    <div className={s.secondPlace}>
                        <p className={s.placesName}>SCHOOL OF INFORMATIONAL TECHNOLOGIES</p>
                        <p className={s.yearsPeriod}>2004 - 2005</p>
                        <p className={s.description}>Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                    </div>
                    <div className={s.thirdPlace}>
                        <p className={s.placesName}>LOREM IPSUM SCHOOL</p>
                        <p className={s.yearsPeriod}>2003 - 2006</p>
                        <p className={s.description}>Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor
                            incididunt ut</p>
                    </div>
                </div>
            </div>
        </div>
    )
}