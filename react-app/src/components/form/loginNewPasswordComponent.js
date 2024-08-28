import React from 'react'
import {Field, Form} from "react-final-form";
import {TextInputComponent} from "../formField/textInputComponent";
import {ButtonComponent} from "../button/buttonComponent";
import {Link} from "react-router-dom";
import {DASHBOARD} from "../../constants/routePaths";



export const LoginNewPasswordComponent = () => {
    const validate = (values) => {
        const errors = {};

        return errors;
    };

    const submit = (values) => {

    };

    return (
        <section className='login-form login-pass'>
            <div className="title__cnt">
                <div className="title-item">
                    <h2>
                        Log in with
                        your new password
                    </h2>
                </div>
                <div className="title-item small">
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
                                label="Passsword"
                                type="password"
                                svg="/eye-off.svg"
                                component={TextInputComponent}
                            />
                        </div>
                        <Link to={DASHBOARD} className='contact-form__btn'>
                            <ButtonComponent btnText={"Login"} classN={"yellow-btn"} />
                        </Link>
                    </form>
                )}
            ></Form>
        </section>
    )
}
