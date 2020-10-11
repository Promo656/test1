import React from "react";
import s from "./Footer.module.scss"
import {CopyrightOutlined} from "@ant-design/icons";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export function Footer() {
    AOS.init()

    return (
        <div className={s.footerBlock}>
            <CopyrightOutlined /> <span> Copyright 2020 Designer</span> | <span>All RightReserved.</span>
        </div>
    )
}