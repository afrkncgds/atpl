import React from 'react';
import {LogoComponent} from "../../common/logoComponent";
import {MenuComponent} from "../../common/menuComponent";
import {SvgImgComponent} from "../../img/svgImgComponent";
import {TERM_CONDITION} from "../../../constants/routePaths";

const Footer = ({ img}) => {
    const footerMenuArr = [
        {
            name: "About LMS",
            link: "about-us"
        },
        {
            name: "FAQ",
            link: "faq"
        },
        {
            name: "Contact Us",
            link: "contact-us"
        },
        {
            name: "Atplquestions.com",
            link: "/" 
        }
    ]
    return(
        <div className='footer'>
            <div className="footer-wrapper safe-area">
                <div className="footer-top-container ">
                    <LogoComponent icon={"logo.svg"}/>
                    <MenuComponent data={footerMenuArr}/>

                </div>
                <div className="footer-bottom-container">
                    <div className="social-menu">
                        <a href="/" className="social-item">

                                <SvgImgComponent img={"fb.svg"} alt={"icon"}/>



                        </a>
                        <a href="/" className="social-item">
                            <SvgImgComponent img={"tw.svg"} alt={"icon"}/>

                        </a>
                        <a href="/" className="social-item">
                            <SvgImgComponent img={"insta.svg"} alt={"icon"}/>

                        </a>
                    </div>
                    <div className="copy-right-block">
                        <div className="copy-right-item">
                            <a href={TERM_CONDITION}>
                                Terms & Conditions
                            </a>
                        </div>
                        <div className="copy-right-item">
                            <span>
                                Copyright © 2017 - 2024 ATPLQuestions
                            </span>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;