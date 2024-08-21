import React, {   } from "react";
import {LogoComponent} from "../common/logoComponent";






const LoginHeader = ()=> {





    return(
        <header className="lgheader">
            <div className="header--wrapper safe-area">
                <LogoComponent icon={"logo.svg"}/>

            </div>
        </header>
    )
}

export default LoginHeader;