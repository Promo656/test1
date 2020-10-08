import React, {useState} from "react";
import s from "./Header.module.scss"
import {MenuOutlined} from "@ant-design/icons";

export function Header() {

    const [menu, setMenu] = useState(false)

    let onMenuButtonClick = () => {
        setMenu(!menu)
    }

    return (
        <div className={s.headerBlock}>
            <div className={s.header}>
                <div className={s.nav}>
                    <a href="#">About Me</a>
                    <a href="#">Resume</a>
                    <a href="#">My Projects</a>
                    <a href="#">Contact</a>

                </div>
            </div>
            <div className={s.burgerMenu}>
                <div className={menu ? s.burgerNav : s.showBurgerMenu}>
                    <a href="#">About Me</a>
                    <a href="#">Resume</a>
                    <a href="#">My Projects</a>
                    <a href="#">Contact</a>
                </div>
                <MenuOutlined onClick={onMenuButtonClick}/>
            </div>
        </div>

    )
}