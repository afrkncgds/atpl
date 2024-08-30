import React, {   } from "react";
import { LogoComponent } from "../common/logoComponent";
import {DsMenuComponent} from "../dsComponents/dsMenuComponent";

const DsHeader = ()=> {

    return(
        <header className="header ds">
            <div className="header--wrapper safe-area">
                <LogoComponent icon={"logo.svg"}/>
                <div class="menu-block">
                    <DsMenuComponent/>

                </div>

            </div>
        </header>
    )
}

export default DsHeader;