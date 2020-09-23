import React from "react";
import s from "./AboutMe.module.css";
import {Button} from "semantic-ui-react";


export function AboutMe() {
    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <p className={s.header}>About Me</p>
                <div className={s.body}>
                    <p className={s.aboutMe}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam beatae culpa dignissimos
                        hic itaque nam non obcaecati officia vero? Cupiditate deserunt, eligendi et illo nihil nulla
                        quaerat ratione repudiandae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam beatae culpa dignissimos
                        hic itaque nam non obcaecati officia vero? Cupiditate deserunt, eligendi et illo nihil nulla
                        quaerat ratione repudiandae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam beatae culpa dignissimos
                        hic itaque nam non obcaecati officia vero? Cupiditate deserunt, eligendi et illo nihil nulla
                        quaerat ratione repudiandae?
                    </p>
                    <Button color={"violet"}>DOWNLOAD CV</Button>

                </div>
            </div>
        </div>
    )
}