import React from "react";
import s from "./Header.module.css"

export function Header(){
    return(
        <div className={s.containerBlock}>
{/*            <div className={s.menu}>
                <div>
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
                </div>
                <div><a href="#">About Me</a></div>
                <div><a href="#">Resume</a></div>
                <div><a href="#">My Projects</a></div>
                <div><a href="#">Contact</a></div>
            </div> */}
        </div>

    )
}