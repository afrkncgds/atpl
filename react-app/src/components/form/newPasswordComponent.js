import React from 'react'
import {Field, Form} from "react-final-form";
import {TextInputComponent} from "../formField/textInputComponent";
import {ButtonComponent} from "../button/buttonComponent";
import {Link} from "react-router-dom";
import { LOGIN} from "../../constants/routePaths";
import { StepLineComponent } from '../common/stepLineComponent';


export const NewPasswordComponent = () => {
    const validate = (values) => {
        const errors = {};

        return errors;
    };

    const submit = (values) => {

    };

    return (
        <section className='login-form new-pass'>
            <div className="title__cnt">
                <div className="title-item">
                    <h2>
                        Set your new password
                    </h2>
                </div>
                <div className="title-item small">
                    <h3>
                        Your password must be at least 10 characters. It must contain 1 uppercase letter, 1 lowercase letter and a number.
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
                                name="password"
                                label="Password"
                                type="password"
                                svg="/eye-off.svg"
                                firstSvg={"/lock.svg"}
                                placeholder="*******************"
                                component={TextInputComponent}
                            />
                            <StepLineComponent length={4} activeVal={0}/>
                        </div>
                        <Link to={LOGIN + "?login-pass"} className='contact-form__btn'>
                            <ButtonComponent btnText={"Confirm My Password"} classN={"yellow-btn"} />
                        </Link>
                    </form>
                )}
            ></Form>
        </section>
    )
}
