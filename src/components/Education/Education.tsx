import React from "react";
import s from "./Education.module.scss";
import {PlaceOfWork} from "../../Common/Components/PlaceOfWork/PlaceOfWork";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export function Education() {
    AOS.init({duration:1200})

    return (
        <div className={s.educationBlock} data-aos="fade-right">
            <div className={s.presentBlock}>
                <p className={s.header}>Education</p>
                <PlaceOfWork
                    placesName={"UNIVERSITY OF MINNESOTA TWIN CITIES"}
                    yearsPeriod={"2006 - 2010"}
                    description={"Bachelor Computer Engineering Lorem"}
                />
                <PlaceOfWork
                    placesName={"SCHOOL OF INFORMATIONAL TECHNOLOGIES"}
                    yearsPeriod={"2004 - 2005"}
                    description={"Awesome student, lorem ipsum dolor sit amet, conse ctetur"}
                />
                <PlaceOfWork
                    placesName={"LOREM IPSUM SCHOOL"}
                    yearsPeriod={"2003 - 2006"}
                    description={"Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit"}
                />
            </div>
        </div>
    )
}


