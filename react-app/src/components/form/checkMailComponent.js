import React from 'react'
import {Field, Form} from "react-final-form";
import {TextInputComponent} from "../formField/textInputComponent";
import {ButtonComponent} from "../button/buttonComponent";
import {Link} from "react-router-dom";
import {HOME_PAGE, LOGIN} from "../../constants/routePaths";


export const CheckMailComponent = () => {
    const validate = (values) => {
        const errors = {};

        return errors;
    };

    const submit = (values) => {

    };

    return (
        <section className='login-form check-mail'>
            <div className="title__cnt">
                <div className="title-item">
                    <h2>
                        Check your
                        e-mail address
                    </h2>
                </div>
                <div className="title-item small">
                    <h3>
                        The password reset link has been sent to your email address. Click on the link sent to you.
                    </h3>

                </div>
            </div>
            <Form
                validate={validate}
                onSubmit={submit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='login-form__block'>





                        </div>


                        <Link to={LOGIN +  "? new-pass"} className='contact-form__btn'>
                            <ButtonComponent btnText={"Reset My Password"} classN={"btn"} />
                        </Link>

                    </form>
                )}
            ></Form>
        </section>
    )
}
