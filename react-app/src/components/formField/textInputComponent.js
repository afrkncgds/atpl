import React from 'react'

export const TextInputComponent = ({ input, type, label, placeholder, meta: { error, touched }, max, disabled, errText }) => {
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
                // error &&
                <span className='err-text'>
                    {errText || "Error text"}
                </span>
            }
        </div>
    );
}
