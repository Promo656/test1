import s from "./Welcome.module.css";
import React from "react";

export function WelcomeBlock() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div className={s.menu}>
                    <div><a href="#">About Me</a></div>
                    <div><a href="#">Resume</a></div>
                    <div><a href="#">My Project</a></div>
                    <div><a href="#">Contact</a></div>
                </div>
                <div className={s.about}>
                    <div className={s.photo}>
                        <img
                            className={s.img}
                            src="https://previews.aspirity.com/spirit/assets/img/img_avatar.png"
                            alt=""
                        />
                    </div>
                    <div className={s.description}>
                        <p>John Anderson_</p>
                        <p>frontend developer, QA-engineer</p>
                        <p>AGE: 23</p>
                        <p>PHONE:8 (234) 456-33-33</p>
                        <p>EMAIL:mail@mail.com</p>
                        <p>ADDRESS:Melbourne Victoria 3000 Australia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}