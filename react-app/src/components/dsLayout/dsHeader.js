import React, {   } from "react";
import { LogoComponent } from "../common/logoComponent";

const DsHeader = ()=> {

    return(
        <header className="header">
            <div className="header--wrapper safe-area">
                <LogoComponent icon={"logo.svg"}/>
            </div>
        </header>
    )
}

export default DsHeader;