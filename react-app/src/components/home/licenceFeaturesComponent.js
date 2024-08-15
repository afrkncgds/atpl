import React from 'react';

import { TextLicanceListComponent } from "../list/textLicanceListComponent";


export const LicenceFeaturesComponent = () => {
    const listArr = ["Custom Exam Creation", "Random Exam Creation", "Student Subscription Management", "Student Enrolment", "Student Group Management", "Student Progress Tracking"]
    return (
        <section className='home__cnt licenced safe-area'>
            <h2>LMS Features</h2>
            <div className="content__block">
                <TextLicanceListComponent data={listArr} subTitle={"WHAT'S INCLUDED"} title={"Licenced LMS Package"} detail="Basically you can manage everything about your student and students’ progress." icon={"tick.svg"} />
            </div>
        </section>
    );
}