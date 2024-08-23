import React from 'react'
import {SvgImgComponent} from "../img/svgImgComponent";

export const TextInputComponent = ({ input, type, label,svg, placeholder, meta: { error, touched }, max, disabled, errText }) => {
    return (
        <div
            className={`input-block ${touched && error ? "err" : ""}`}
        >
            <label htmlFor={input.name}>{label}</label>
            <input
                {...input}
                id={input.name}
                disabled={disabled}
                name={input.name}
                type={type}
                maxLength={max}
                placeholder={placeholder}


            />
            {
                svg &&
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.42239 7.63213C3.7804 8.39105 3.2905 9.28277 2.99976 10.2602C3.89781 13.2761 6.69182 15.4752 9.99945 15.4752C10.6898 15.4752 11.3577 15.3794 11.9907 15.2004M5.98558 6.24471C7.13746 5.48523 8.51714 5.0432 10.0001 5.0432C13.3077 5.0432 16.1017 7.2423 16.9998 10.2582C16.5046 11.9227 15.4321 13.3385 14.0143 14.2734M5.98558 6.24471L3.74088 4M5.98558 6.24471L8.52477 8.78389M14.0143 14.2734L16.2593 16.5184M14.0143 14.2734L11.4754 11.7345M11.4754 11.7345C11.8529 11.3569 12.0865 10.8353 12.0865 10.2592C12.0865 9.10691 11.1524 8.1728 10.0001 8.1728C9.42393 8.1728 8.90233 8.40633 8.52477 8.78389M11.4754 11.7345L8.52477 8.78389" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

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
