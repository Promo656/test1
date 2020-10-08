import React from "react";
import s from "./ContactMe.module.scss"
import {Button, TextField} from "@material-ui/core";

export function ContactMe() {
    return (
        <div className={s.contactMeBlock}>
            <div className={s.presentBlock}>
                <p className={s.contact}>Get in touch</p>
                <form className={s.form}>
                    <TextField className={s.formName} label="Name" variant={"outlined"}/>
                    <TextField className={s.formEmail} label="Email" variant={"outlined"}/>
                    <TextField className={s.formMessage} label="Your Message" variant={"outlined"} multiline/>
                </form>
                <Button variant="outlined" color="primary">Sent</Button>
            </div>
        </div>
    )
}