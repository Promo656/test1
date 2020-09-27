import React from "react";
import s from "./test.module.css"

export function Site() {
    return (
        <div>
            <Menu/>
            <Header/>
            <Hello/>
        </div>
    )
}

function Menu() {
    return (
        <div className={s.container}>
            <div className={s.row}>
                <div className="menu__wrapper d-none d-lg-block col-md-12">
                    <nav className="">
                        <ul>
                            <li><a href="#hello">Hello</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#testimonials">testimonials</a></li>
                            <li><a href="#blog">blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

function Header() {
    return (
        <header className={s.mainHeader}>
            <div className={s.container}>
                <div className={s.row + "" + s.personalProfile}>
                    <div className={s.col_md_4 + "" + s.personalProfile__avatar}>
                        <img className="" src="" alt="avatar"/>
                    </div>
                    <div className={s.col_md_8}>
                        <p className={s.personalProfile__name}>John Anderson_</p>
                        <p className={s.personalProfile__work}>frontend developer, QA-engineer</p>
                        <div className={s.personalProfile__contacts}>
                            <dl className={s.contactList + "" + s.contactList__opacityTitles}>
                                <dt>Age:</dt>
                                <dd>23</dd>
                                <dt>Phone:</dt>
                                <dd><a href="tel:82344563333">8 (234) 456-33-33</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:mail@mail.com">mail@mail.com</a></dd>
                                <dt>Address:</dt>
                                <dd>Melbourne Victoria 3000 Australia</dd>
                            </dl>
                        </div>
                        <p className={s.personalProfile__social}>
                            <a href="" target="_blank"><i className="fa fa-github"></i></a>
                            <a href="" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                            <a href="" target="_blank"><i className="fa fa-facebook-square"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

function Hello() {
    return (
        <section id="hello" className={s.container + "" + s.section}>
            <div className={s.row}>
                <div className="col-md-10">
                    <h2 id="hello_header" className={s.section__title}>Hi_</h2>
                    <p className={s.section__description}>
                        I am Junior Web developer able to build a Web presence from the ground up - from concept,
                        navigation,
                        layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient
                        code using
                        current best practices in Web development. Fast learner, hard worker and team player who is
                        proficient in
                        an array of scripting languages and multimedia Web tools.
                    </p>
                    <a href="" className={s.section_btn + "" + s.siteBtn}><img src="assets/img/img_btn_icon.png" alt=""/>
                    Download CV</a>
                </div>
            </div>
        </section>
    )
}