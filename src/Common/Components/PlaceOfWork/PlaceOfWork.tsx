import s from "./PlaceOfWork.module.scss";
import React from "react";

export type PlaceOfWorkType = {
    placesName: string
    yearsPeriod: string
    description: string
}

export function PlaceOfWork(props: PlaceOfWorkType) {
    return (
        <div className={s.placeOfWork}>
            <p className={s.placesName}>{props.placesName}</p>
            <p className={s.yearsPeriod}>{props.yearsPeriod}</p>
            <p className={s.description}>{props.description}</p>
        </div>
    )
}