import React from 'react';
import { BannerComponent } from '../components/home/bannerComponent';
import { MainFeaturesComponent } from '../components/home/mainFeaturesComponent';
import { ContentImgBlock } from '../components/contentBlock/contentImgBlock';

const HomePage = () => {
    return (
        <div className='home page-common'>
            <BannerComponent/>
            <MainFeaturesComponent/>
            <ContentImgBlock classN={"home__cnt safe-area"} title={"Benefits of LMS"}/>
        </div>
    );
}

export default HomePage;