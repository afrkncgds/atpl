import React, { useEffect } from "react";
import { SvgImgComponent } from "../img/svgImgComponent";
import { ButtonComponent } from "../button/buttonComponent";


export const InfoLbxComponent = ({icon, title, text, classN, btnText, btnClass}) => {
    // useEffect(()=>{
    //     document.body.classList.add('no-scroll')
    //     return ()=>{
    //         document.body.classList.remove('no-scroll')
    //     }
    // })
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