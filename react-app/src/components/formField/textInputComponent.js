import React from 'react'
import {SvgImgComponent} from "../img/svgImgComponent";

export const TextInputComponent = ({ input, label,svg, firstSvg, placeholder, meta: { error, touched }, max, disabled, errText }) => {
    return (
        <div
            className={`input-block ${touched && error ? "err" : ""}`}
        >
            <label htmlFor={input.name}>{label}</label>
            {
                firstSvg &&
                <SvgImgComponent img={firstSvg} classN={"first"}/>
            }
            <input
                {...input}
                id={input.name}
                disabled={disabled}
                name={input.name}
                type={input.type}
                maxLength={max}
                placeholder={placeholder}
                className={`${firstSvg ? "svg-input" : ""} ${input.value?.length > 0 ? "active" : ""}`}
            />
            {
                svg &&
                <SvgImgComponent img={svg} classN={"last"}/>
            }
            {
                // error &&
                <span className='err-text'>
                    {errText || "Error text"}
                </span>
            }
        </div>
    );
}
