import React from "react";
import s from "./Header.module.scss"
import "../../index.scss"

export function Header() {
    return (
        <div className={`${s.containerBlock} wrapper`}>
            <div className={s.presentBlock}>
                <a href="#">About Me</a>
                <a href="#">Resume</a>
                <a href="#">My Projects</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}