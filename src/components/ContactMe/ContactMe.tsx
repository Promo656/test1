import React from "react";
import s from "./ContactMe.module.css"
import {Button, TextField} from "@material-ui/core";

export function ContactMe() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <p className={s.contact}>
                    Get in touch
                </p>
                <form className={s.form}>
                    <TextField className={s.formName} label="Name" variant={"outlined"}/>
                    <TextField className={s.formEmail} label="Email" variant={"outlined"}/>
                    <TextField className={s.formMessage} label="Your Message" variant={"outlined"} multiline/>
                </form>
                <Button className={s.btn} variant="outlined" color="primary">Sent</Button>
            </div>
        </div>
    )
}