import React from "react";
import s from "./ContactMe.module.scss"
import {TextField} from "@material-ui/core";
import {FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, SendOutlined} from "@ant-design/icons";
import {Button} from "antd";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export function ContactMe() {
    AOS.init()

    return (
        <div className={s.contactMeBlock}>
            <div className={s.presentBlock}>
                <p className={s.contact}>Get in touch</p>
                <div className={s.social}>
                    <a href="https://www.facebook.com/EgorPostnov1994" target={"_blank"} data-aos="fade-up" data-aos-delay="100" >
                        <FacebookOutlined style={{fontSize: "36px"}}/>
                    </a>
                    <a href="https://www.instagram.com/pstnov" target={"_blank"} data-aos="fade-up" data-aos-delay="200">
                        <InstagramOutlined style={{fontSize: "36px"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/postnov-egor-sergeevich" target={"_blank"} data-aos="fade-up" data-aos-delay="300">
                        <LinkedinOutlined style={{fontSize: "36px"}}/>
                    </a>
                    <a href="https://github.com/Promo656" target={"_blank"} data-aos="fade-up" data-aos-delay="400">
                        <GithubOutlined style={{fontSize: "36px"}}/>
                    </a>
                </div>
                <form className={s.form}>
                    <TextField label="Name" variant={"outlined"} size={"small"} margin={"normal"}/>
                    <TextField label="Email" variant={"outlined"} size={"small"} margin={"normal"}/>
                    <TextField label="Your Message" variant={"outlined"} multiline rows={4} margin={"normal"}/>
                </form>
                <Button shape={"round"} icon={<SendOutlined />} size={"large"} type={"ghost"}>Sent Message</Button>
            </div>
        </div>
    )
}