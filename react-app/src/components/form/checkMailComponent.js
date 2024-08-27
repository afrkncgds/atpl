import React from 'react'
import {ButtonComponent} from "../button/buttonComponent";
import {Link} from "react-router-dom";
import {LOGIN} from "../../constants/routePaths";
import { TextListComponent } from '../list/textListComponent';


export const CheckMailComponent = () => {
    const data = [
        "It may take up to 10 minutes for the password reset email to arrive.",
        "Check your spam and other e-mail folders.",
        "Check the accuracy of the e-mail address you entered."
    ]
    return (
        <section className='login-form check-email'>
            <div className="title__cnt">
                <div className="title-item">
                    <h2>
                        Check your <br />
                        e-mail address
                    </h2>
                </div>
                <div className="title-item small">
                    <h3>
                        The password reset link has been sent to your email address. Click on the link sent to you.
                    </h3>
                </div>
                <p className='login__mail-text'>gokhan.kocaman@atplquestions.com</p>
                <p className='login__bold-text'>If you have not received your Password Reset e-mail:</p>
                <TextListComponent data={data}/>
            </div>
            <Link to={LOGIN + "? new-pass"} className='contact-form__btn'>
                <ButtonComponent btnText={"Reset My Password"} classN={"btn"} />
            </Link>
        </section>
    )
}
