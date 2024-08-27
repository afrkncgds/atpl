import React from 'react'
import {Field, Form} from "react-final-form";
import {TextInputComponent} from "../formField/textInputComponent";
import {ButtonComponent} from "../button/buttonComponent";
import {Link} from "react-router-dom";
import {HOME_PAGE, LOGIN} from "../../constants/routePaths";


export const ResetPasswordFormComponent = () => {
    const validate = (values) => {
        const errors = {};

        return errors;
    };

    const submit = (values) => {

    };

    return (
        <section className='login-form'>
            <div className="title__cnt">
                <div className="title-item">
                    <h2>
                    Reset Password
                    </h2>
                </div>
                <div className="title-item small">
                    <h3>
                    We need your email address so we can send you the password reset link.
                    </h3>

                </div>
            </div>
            <Form
                validate={validate}
                onSubmit={submit}
                render={({ handleSubmit, sumbitFailed }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='login-form__block'>
                            <Field
                                name="e-mail"
                                label="E-Mail Address"
                                type="text"
                                component={TextInputComponent}
                            />
                            <Field
                                name="password"
                                label="Password"
                                type="text"
                                svg="/img/svg/eye-off.svg"
                                component={TextInputComponent}
                            />



                        </div>
                        <Link to={LOGIN + "?reset-password"} className="forgot-btn">
                            <p>
                                I forgot my password
                            </p>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 5L12 10L7 15" stroke="#482200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </Link>

                        <div className='contact-form__btn'>
                            <ButtonComponent btnText={"Login"} classN={"yellow-btn"} />
                        </div>
                    </form>
                )}
            ></Form>
        </section>
    )
}
