import React from "react";
import s from "./Header.module.css"

export function Header() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div><a href="#">About Me</a></div>
                <div><a href="#">Resume</a></div>
                <div><a href="#">My Projects</a></div>
                <div><a href="#">Contact</a></div>
            </div>
        </div>
    )
}