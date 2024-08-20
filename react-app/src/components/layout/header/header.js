import React, {   } from "react";


import {LogoComponent} from "../../common/logoComponent";
import {MenuComponent} from "../../common/menuComponent";

const Header = ()=> {

    const menuArr = [
        {
        name:"Home",
        link:"/"
        },
        {
            name:"About LMS",
            link:"about-us"
        },
        {
            name:"FAQ",
            link: "faq"
        },
        {
            name:"Contact Us",
            link:"contact-us"

        }
    ]


    return(
        <header className="header">
            <div className="header--wrapper safe-area">
                <LogoComponent icon={"logo.svg"}/>
                <MenuComponent  data={menuArr} btnText={"Log in LMS"} icon={"user.svg"}/>
            </div>
        </header>
    )
}

export default Header;