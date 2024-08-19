import React from 'react';
import {BreadcrumbComponent} from "../components/common/breadcrumbComponent";
import {TitleComponent} from "../components/common/titleComponent";


const AboutUs = () => {

    return (
        <div className='aboutUs page-common safe-area'>
            <BreadcrumbComponent title={"About LMS"}/>
            <div className="about__cnt">
                <TitleComponent title={"About LMS"}/>
                <div className="about-wrapper">
                    <div className="text-container">
                        <div className="text-item">
                            <p>
                                Welcome to ATPL Questions (ATPLQ), your premier online platform dedicated to assisting aspiring
                                pilots in their preparation for the Airline Transport Pilot License (ATPL) exams.
                            </p>

                        </div>
                        <div className="text-item">
                            <p>
                                As the highest level of aircraft pilot certification,
                                the ATPL is a crucial step towards operating as a
                                pilot-in-command of an airline aircraft. Our mission is
                                to provide comprehensive study materials and question banks designed specifically to help pilots
                                succeed in their ATPL exams.
                            </p>

                        </div>

                    </div>
                    <div className="image-container">{

                    }
                </div>
                    <div className="mask-block">

                    </div>

                </div>



            </div>


        </div>
    );
}

export default AboutUs;