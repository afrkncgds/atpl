import React from 'react';
import {LogoComponent} from "../../common/logoComponent";
import {MenuComponent} from "../../common/menuComponent";
import {SvgImgComponent} from "../../img/svgImgComponent";

const Footer = ({ icon}) => {
    const footerMenuArr = ["About LMS","FAQ","Contact Us","Atplquestions.com"]
    return(
        <div className='footer'>
            <div className="footer-wrapper safe-area">
                <div className="footer-top-container ">
                    <LogoComponent icon={"logo.svg"}/>
                    <MenuComponent data={footerMenuArr}/>

                </div>
                <div className="footer-bottom-container">
                    <div className="social-menu">
                        <div className="social-item">
                            {
                                icon &&
                                <SvgImgComponent icon={"fb.svg"} alt={"icon"}/>

                            }

                        </div>
                        <div className="social-item">
                            <SvgImgComponent icon={"tw.svg"} alt={"icon"}/>

                        </div>
                        <div className="social-item">
                            <SvgImgComponent icon={"insta.svg"} alt={"icon"}/>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;