import React from 'react';
import {BreadcrumbComponent} from "../components/common/breadcrumbComponent";
import {TitleComponent} from "../components/common/titleComponent";


const ContactUs = () => {

    return (
        <div className='contactUs page-common safe-area'>
            <BreadcrumbComponent title={"Contact Us"}/>
            <div className="contact__cnt">
                <TitleComponent title={"Contact Us"}/>
            </div>


        </div>
    );
}

export default ContactUs;