import React from 'react';
import { BannerComponent } from '../components/home/bannerComponent';
import { MainFeaturesComponent } from '../components/home/mainFeaturesComponent';
import { ImgCardComponent } from '../components/card/imgCardComponent';

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
        </div>
    );
}

export default HomePage;