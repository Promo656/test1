import React, {useEffect} from "react";
import s from "./AboutMe.module.scss";
import {Button} from "semantic-ui-react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";


export function AboutMe() {
  AOS.init({duration:1200})

    return (
        <div className={s.aboutMeBlock}>
            <div className={s.container} data-aos="fade-right">
                <p className={s.header}>About Me</p>
                <div className={s.content}>
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