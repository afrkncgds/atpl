import React from 'react';

import { TextLicanceListComponent } from "../list/textLicanceListComponent";
import { SliderComponent } from '../common/sliderComponent';


export const BussinessSliderComponent = () => {
    const listArr = [
        {
            img: "/img/home/home-slider-1.png",
            alt: "home-slider-1"
        },
        {
            img: "/img/home/home-slider-2.png",
            alt: "home-slider-2"
        },
        {
            img: "/img/home/home-slider-1.png",
            alt: "home-slider-3"
        },
        {
            img: "/img/home/home-slider-2.png",
            alt: "home-slider-4"
        }
    ]
    return (
        <section className='home__cnt bussiness safe-area'>
            <h2>LMS Business Partners</h2>
            <div className="content__block">
                <SliderComponent data={listArr}/>
            </div>
        </section>
    );
}