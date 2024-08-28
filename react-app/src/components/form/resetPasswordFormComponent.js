import React from 'react'
import {Field, Form} from "react-final-form";
import {TextInputComponent} from "../formField/textInputComponent";
import {ButtonComponent} from "../button/buttonComponent";
import {Link} from "react-router-dom";
import { LOGIN} from "../../constants/routePaths";


export const ResetPasswordFormComponent = () => {
    const validate = (values) => {
        const errors = {};

        return errors;
    };

    const submit = (values) => {

    };

    return (
        <section className='login-form reset-password'>
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




                        </div>


                       <div className="btn-block">
                           <Link  to={LOGIN + "?check-mail"} className='contact-form__btn'>
                               <ButtonComponent btnText={"Reset My Password"} classN={"yellow-btn"} />
                           </Link>
                           <Link to={LOGIN} className='contact-form__btn'>
                               <ButtonComponent btnText={"Return to Login"} classN={"btn white-btn"} />
                           </Link>
                       </div>
                    </form>
                )}
            ></Form>
        </section>
    )
}
