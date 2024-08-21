import React from 'react';
import {BreadcrumbComponent} from "../components/common/breadcrumbComponent";
import {TitleComponent} from "../components/common/titleComponent";
import { ContactFormComponent } from '../components/form/contactFormComponent';
import { CopyBlockComponent } from '../components/common/copyBlockComponent';


const ContactUs = () => {
    const data = [
        {
            img: "/message.svg",
            title: "E-Mail",
            text: "lms@atplquestions.com",
            btnText: "Copy Address",
            icon: "/copy.svg"
        },
        {
            img: "/vatNo.svg",
            title: "Vat Number",
            text: "1031293656",
            btnText: "Copy Address",
            icon: "/copy.svg"
        },
        {
            img: "/address.svg",
            title: "Address",
            text: "Merkezefendi Mah. Mevlevihane Çıkmaz Sok. No:5 34010 <br/> Zeytinburnu/İstanbul",
            btnText: "Get Directions",
            icon: "/map.svg"
        }
    ]
    return (
        <div className='contactUs page-common'>
            <div className='safe-area'>
            <BreadcrumbComponent title={"Contact Us"}/>
            <div className="contact__cnt">
                <TitleComponent title={"Contact Us"}/>
                <p>If you have any questions, get in touch here.</p>
            </div>
            <ContactFormComponent isBg={false}/>
            <CopyBlockComponent data={data}/>
            </div>
        </div>
    );
}

export default ContactUs;