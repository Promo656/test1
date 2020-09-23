import React from "react";
import s from "./AboutMe.module.css";


export function AboutMe() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <p className={s.header}>About Me</p>
                <div className={s.body}>
                    <p className={s.aboutMe}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam beatae culpa dignissimos
                        hic itaque nam non obcaecati officia vero? Cupiditate deserunt, eligendi et illo nihil nulla
                        quaerat ratione repudiandae?
                    </p>
                </div>
            </div>
        </div>
    )
}