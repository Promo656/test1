import React from "react";
import s from "./Welcome.module.css";
import foto from "./Photo.jpg"

export function WelcomeBlock() {

    return (
        <div className={s.containerBlock}>
            <div className={s.presentBlock}>
                <div className={s.about}>
                    <img
                        className={s.img}
                        src={foto}
                        alt=""
                    />
                    <div className={s.description}>
                        <span className={s.name}>Egor Postnov</span>
                        <p className={s.position}>frontend developer, QA-engineer</p>
                        <div className={s.personal_profile_contacts}>
                            <dl className={s.contact_list + " " + s.contact_list_opacity_titles}>
                                <dt>Age:</dt>
                                <dd>23</dd>
                                <dt>Phone:</dt>
                                <dd>8 (234) 456-33-33</dd>
                                <dt>Email:</dt>
                                <dd>mail@mail.com</dd>
                                <dt>Address:</dt>
                                <dd>Melbourne Victoria 3000 Australia</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}