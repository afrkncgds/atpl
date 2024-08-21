import React from 'react';
import {LoginForm} from "../components/form/loginForm";
import {ImgComponent} from "../components/img/imgComponent";



const LoginPage = ({img}) => {

    return (
        <div className='login '>
            <div className="login-wrapper page-common safe-area">
                <div className="login-container">
                    <LoginForm/>
                    <ImgComponent img="/img/dashboard/login.png" alt="login-img"/>
                </div>

            </div>


        </div>
    );
}

export default LoginPage;