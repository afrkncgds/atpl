import React from 'react';
import {LoginForm} from "../components/form/loginForm";
import {SvgImgComponent} from "../components/img/svgImgComponent";



const LoginPage = () => {

    return (
        <div className='login '>
            <div className="login-wrapper page-common safe-area">
                <div className="login-container">
                    <LoginForm/>
                    <SvgImgComponent/>
                </div>

            </div>


        </div>
    );
}

export default LoginPage;