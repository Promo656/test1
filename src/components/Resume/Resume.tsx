import React from "react";
import {Skills} from "./Skills/Skills";
import {Education} from "./Education/Education";
import {Employment} from "./Employment/Employment";

export function Resume() {
    return (
        <div>
            <Education/>
            <Employment/>
            <Skills/>
        </div>
    )
}