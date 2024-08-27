import React from 'react';
import {LoginForm} from "../components/form/loginForm";
import {ImgComponent} from "../components/img/imgComponent";
import { useLocation } from 'react-router-dom';
import { ResetPasswordFormComponent } from '../components/form/resetPasswordFormComponent';



const LoginPage = ({img}) => {
    const loc = useLocation();
    console.log("TEST LOC---", loc);
    
    return (
        <div className='login '>
            <div className="login-wrapper page-common safe-area">
                <div className="login-container">
                    {
                        !loc.search ? 
                        <LoginForm/>
                        :
                        loc.search.includes("reset-password") ? 
                        <ResetPasswordFormComponent/>
                        :
                        <div/>
                    }
                    
                    <ImgComponent img="/img/dashboard/login.png" alt="login-img"/>
                </div>

            </div>


        </div>
    );
}

export default LoginPage;