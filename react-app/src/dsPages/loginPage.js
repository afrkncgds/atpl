import React from 'react';
import { LoginForm } from "../components/form/loginForm";
import { ImgComponent } from "../components/img/imgComponent";
import { useLocation } from 'react-router-dom';
import { ResetPasswordFormComponent } from '../components/form/resetPasswordFormComponent';
import { CheckMailComponent } from "../components/form/checkMailComponent";
import { NewPasswordComponent } from "../components/form/newPasswordComponent";
import { LoginNewPasswordComponent } from "../components/form/loginNewPasswordComponent";



const LoginPage = ({ img }) => {
    const loc = useLocation();
    console.log("TEST LOC---", loc);

    return (
        <div className='login '>
            <div className="login-wrapper page-common safe-area">
                <div className="login-container">
                    {
                        !loc.search ?
                            <LoginForm />
                            :
                            loc.search.includes("reset-password") ?
                                <ResetPasswordFormComponent />
                                :
                                loc.search.includes("check-mail") ?
                                    <CheckMailComponent />
                                    :
                                    loc.search.includes("new-pass") ?
                                        <NewPasswordComponent />
                                        :
                                        loc.search.includes("login-pass") ?
                                            <LoginNewPasswordComponent />
                                            :
                                            <div />
                    }
                    <ImgComponent img="/img/dashboard/login.png" alt="login-img" />
                </div>

            </div>


        </div>
    );
}

export default LoginPage;