import React, { } from "react";
import { LogoComponent } from "../common/logoComponent";
import { DsMenuComponent } from "../dsComponents/dsMenuComponent";
import { useLocation } from "react-router-dom";
import { LOGIN } from "../../constants/routePaths";

const DsHeader = () => {
    const loc = useLocation();
    return (
        <header className="header ds">
            <div className="header--wrapper safe-area">
                <LogoComponent icon={"logo.svg"} />
                {
                    loc.pathname !== LOGIN &&
                    <div className="menu-block">
                        <DsMenuComponent />

                    </div>
                }
            </div>
            <div className="background-item"/>
        </header>
    )
}

export default DsHeader;