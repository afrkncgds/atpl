import React from 'react';
import { BannerComponent } from '../components/home/bannerComponent';
import { MainFeaturesComponent } from '../components/home/mainFeaturesComponent';
import { LicenceFeaturesComponent } from '../components/home/licenceFeaturesComponent';
import { ImgCardComponent } from '../components/card/imgCardComponent';
import {BussinessSliderComponent} from "../components/home/bussinessSliderComponent";
import { ContactFormComponent } from '../components/form/contactFormComponent';

const HomePage = () => {
    const benefitArr = [
        {
            img: "/img/home/benefits-1.jpg",
            title: "Event Planning",
            text: "Plan events for your students."
        },
        {
            img: "/img/home/benefits-2.jpg",
            title: "Student Progress",
            text: "Student results and pie charts."
        },
        {
            img: "/img/home/benefits-3.jpg",
            title: "Powerful Management",
            text: "Advanced management system."
        },
    ]
    return (
        <div className='home page-common'>
            <BannerComponent/>
            <MainFeaturesComponent/>
            <ImgCardComponent classN={"home__cnt safe-area"} title={"Benefits of LMS"} data={benefitArr}/>
            <LicenceFeaturesComponent/>
            <BussinessSliderComponent/>
            <ContactFormComponent title={"Join Our LMS"} text="We offer reliable Learning Management System that completely fulfills the requirements from authorities. User friendly interface, easy to read reports and built-in guidance will simplify your learning flow."/>

        </div>
    );
}

export default HomePage;