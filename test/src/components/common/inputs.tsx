import React from "react";
import {TextField} from "@material-ui/core";

export const renderField = (props:any) => (
        <div>
            <TextField {...props.input} type={props.type} variant={props.variant} label={props.label}/>
            {props.meta.touched &&
            ((props.meta.error && <span>{props.meta.error}</span>) ||
                (props.meta.warning && <span>{props.meta.warning}</span>))}
        </div>
)

