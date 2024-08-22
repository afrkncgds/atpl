import React, { useState } from 'react'
import { SvgImgComponent } from '../img/svgImgComponent';

export const SelectBoxComponent = ({ input, options, label, placeholder, errText, meta: { error, touched }, max, disabled, name }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div
            className={`input-block select ${touched && error ? "err" : ""}`}
        >
            <label htmlFor={input.name}>{label}</label>
            <SvgImgComponent img={"chevron.svg"} classN={`gg-chevron ${isOpen ? "open" : ""}`} />
            <select name={name} id={name} onClick={() => setOpen(!isOpen)}>
                {
                    options.map((item, key) => (
                        <option key={key} value={item.value} className={key === 0 ? "disabled" : ""}>{item.label}</option>
                    ))
                }
            </select>
            {
                // error &&
                <span className='err-text'>
                    {errText || "Error text"}
                </span>
            }
        </div>
    );
}
