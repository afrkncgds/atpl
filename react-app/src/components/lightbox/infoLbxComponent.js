import React from "react";
import { SvgImgComponent } from "../img/svgImgComponent";
import { ButtonComponent } from "../button/buttonComponent";


export const InfoLbxComponent = ({icon, title, text, classN, btnText, btnClass}) => {
    return(
        <div className={`lightbox ${classN ? classN : ""}`}>
            <div className="lightbox__cnt">
                <SvgImgComponent img={"darkClose.svg"} classN={"close"}/>
                <SvgImgComponent img={icon}/>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{__html: text}}></p>
                <ButtonComponent btnText={btnText} classN={btnClass} />
            </div>
        </div>
    )
}