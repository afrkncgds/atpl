import React from 'react'

export const TextAreaComponent = ({ input, label, placeholder, errText, meta: { error, touched } }) => {
    return (
        <div
            className={`input-block ${touched && error ? "err" : ""}`}
        >
            <label htmlFor={input.name}>{label}</label>
            <textarea
                {...input}
                id={placeholder}
                name={input.name}
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
