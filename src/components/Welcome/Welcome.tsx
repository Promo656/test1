import React from "react";
import s from "./Welcome.module.css";
import foto from "./Photo.jpg"
import {Button, Menu, MenuItem} from "@material-ui/core";

export function WelcomeBlock() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div className={s.about}>
                    <img
                        className={s.img}
                        src={foto}
                        alt=""
                    />
                    <div className={s.description}>
                        <span className={s.name}>Egor Postnov</span>
                        <p className={s.position}>frontend developer, QA-engineer</p>
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