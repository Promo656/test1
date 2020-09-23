import React from "react";
import {Progress} from "semantic-ui-react";

type PropsType={
    skillName:string
    percent:number
}

export function Skill(props:PropsType) {
    return (
        <div>
            <p>{props.skillName}</p>
            <Progress
                percent={props.percent}
                color={"violet"}
                size={"small"}
                progress={"percent"}
                active
            />
        </div>
    )
}