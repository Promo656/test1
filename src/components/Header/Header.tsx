import React, {useState} from "react";
import s from "./Header.module.scss"
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export function Header() {
    AOS.init({duration:1200})

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
                <div className={menu ? s.burgerNav+"" : s.showBurgerMenu}>
                    <CloseOutlined onClick={onMenuButtonClick} className={s.closeButton}/>
                    <div className={s.menu} >
                        <a href="#">About Me</a>
                        <a href="#">Resume</a>
                        <a href="#">My Projects</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <MenuOutlined onClick={onMenuButtonClick} className={s.openButton}/>
            </div>
        </div>

    )
}