import React from 'react';
import { BannerComponent } from '../components/home/bannerComponent';
import { MainFeaturesComponent } from '../components/home/mainFeaturesComponent';
import { LicenceFeaturesComponent } from '../components/home/licenceFeaturesComponent';
import { ImgCardComponent } from '../components/card/imgCardComponent';
import { BussinessSliderComponent } from "../components/home/bussinessSliderComponent";
import { ContactFormComponent } from '../components/form/contactFormComponent';
import { ImgComponent } from '../components/img/imgComponent';
import { InfoLbxComponent } from '../components/lightbox/infoLbxComponent';

const HomePage = () => {
    const benefitArr = [
        {
            img: "/img/home/benefits-1.jpg",
            title: "Event Planning",
            imgMobile: "/img/home/benefits-mobile-1.jpg",
            text: "Plan events for your students."
        },
        {
            img: "/img/home/benefits-1.jpg",
            title: "Student Progress",
            imgMobile: "/img/home/benefits-mobile-1.jpg",
            text: "Student results and pie charts."
        },
        {
            img: "/img/home/benefits-1.jpg",
            title: "Powerful Management",
            imgMobile: "/img/home/benefits-mobile-1.jpg",
            text: "Advanced management system."
        },
    ]
    return (
        <div className='home page-common'>
            <BannerComponent />
            <MainFeaturesComponent />
            <ImgCardComponent classN={"home__cnt safe-area"} title={"Benefits of LMS"} data={benefitArr} />
            <LicenceFeaturesComponent />
            <BussinessSliderComponent />
            <div className='home__form'>
                {/* scroll olduğunda home__planet divine style ile top ını scroll u dinleyerek azaltabilirsiniz */}
                <div className='home__planet'>
                    <ImgComponent img={"/img/home/plane-earth.png"} imgMobile={"/img/home/plane-earth-mobile.png"} max={641} min={640}/>
                </div>
                <ContactFormComponent title={"Join Our LMS"} text="We offer reliable Learning Management System that completely fulfills the requirements from authorities. User friendly interface, easy to read reports and built-in guidance will simplify your learning flow." />
            </div>
            <InfoLbxComponent icon={"done.svg"} title={"Your message has been sent"} text={"Your message has reached us. <br/> We will contact you as soon as possible."} btnText={"Done"} btnClass="green-btn"/>
            <InfoLbxComponent icon={"warning.svg"} title={"Something Went Wrong"} text={"Lorem ipsum dolor sit amet consectetur. <br/> Quis eros orci quis amet pretium."} btnText={"Done"} btnClass="red-btn"/>
        </div>
    );
}

export default HomePage;