import React, { useEffect, useState } from "react";
import { SvgImgComponent } from "../img/svgImgComponent";
import { ButtonComponent } from "../button/buttonComponent";

export const CopyBlockComponent = ({ data }) => {
    const [isClick, setClick] = useState(false);
    const [actVal, setVal] = useState();

    useEffect(() => {
        if (isClick) {
            setTimeout(() => {
                setClick(false)
            }, 3000)
        }
    }, [isClick])

    const setClickOn = (value) => {
        setVal(value)
        setClick(true)
    }

    return (
        <div className="copy-block">
            {
                data.map((item, key) => (
                    <div className="copy-block__item" key={key}>
                        <div className="copy-block__text">
                            <SvgImgComponent img={item.img} />
                            <h2>{item.title}</h2>
                            <p dangerouslySetInnerHTML={{__html: item.text}}></p>
                        </div>
                        <ButtonComponent props={key} icon={item.icon} btnText={isClick && actVal === key ? "Copied!" : item.btnText} func={setClickOn} classN={"light-yellow-btn"}/>
                    </div>
                ))
            }
        </div>
    )
}