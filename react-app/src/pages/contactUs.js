import React from 'react';
import {BreadcrumbComponent} from "../components/common/breadcrumbComponent";
import {TitleComponent} from "../components/common/titleComponent";
import { ContactFormComponent } from '../components/form/contactFormComponent';


const ContactUs = () => {

    return (
        <div className='contactUs page-common safe-area'>
            <BreadcrumbComponent title={"Contact Us"}/>
            <div className="contact__cnt">
                <TitleComponent title={"Contact Us"}/>
                <p>If you have any questions, get in touch here.</p>
            </div>
            <ContactFormComponent isBg={false}/>

        </div>
    );
}

export default ContactUs;