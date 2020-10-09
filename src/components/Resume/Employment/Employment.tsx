import React from "react";
import s from "./Employment.module.scss";
import {PlaceOfWork} from "../../../Common/Components/PlaceOfWork/PlaceOfWork";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export function Employment() {
    AOS.init({duration:1200})

    return (
        <div className={s.employmentBlock} data-aos="fade-left">
            <div className={s.presentBlock}>
                <p className={s.header}>Employment</p>
                <PlaceOfWork
                    placesName={"APPLE"}
                    yearsPeriod={"2006 - 2010"}
                    description={"Senior Full Stack Developer"}
                />
                <PlaceOfWork
                    placesName={"TECH UNIVERSITY"}
                    yearsPeriod={"2004 - 2005"}
                    description={"Awesome developer, lorem ipsum dolor sit amet, conse ctetur adipisicing elit"}
                />
                <PlaceOfWork
                    placesName={"MOLLY’S STUDIO"}
                    yearsPeriod={"2003 - 2006"}
                    description={"Programmer Lorem ipsum dolor sit amet, consecte tur adipisicing elit"}
                />
            </div>
        </div>
    )
}