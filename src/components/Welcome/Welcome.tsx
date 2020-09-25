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


                <div className={s.menu}>
                    <div><a href="#">About Me</a></div>
                    <div><a href="#">Resume</a></div>
                    <div><a href="#">My Projects</a></div>
                    <div><a href="#">Contact</a></div>
                </div>
                {/*<div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>About Me</MenuItem>
                        <MenuItem onClick={handleClose}>Resume</MenuItem>
                        <MenuItem onClick={handleClose}>My Projects</MenuItem>
                        <MenuItem onClick={handleClose}>Contact</MenuItem>
                    </Menu>
                </div>*/}

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