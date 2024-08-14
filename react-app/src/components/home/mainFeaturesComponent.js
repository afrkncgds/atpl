import React from 'react';
import { TextListComponent } from '../list/textListComponent';
import { ImgComponent } from '../img/imgComponent';
import { ButtonComponent } from '../button/buttonComponent';

export const MainFeaturesComponent = () => {
    const listArr = ["Personalised study plan for your students.", "Overview of student progress and activities.", "Schedule events and exams for your students."]
    return (
        <section className='home__cnt announcement safe-area'>
            <div className='announcement__block'>
                <ButtonComponent btnText={"for Your Students"} classN={"purple-btn"} icon={"doubleUser.svg"}/>
                <h2>The Main Features</h2>
                <TextListComponent data={listArr} detail="Basically you can manage everything about your student and students’ progress." icon={"tick.svg"} />
                <ButtonComponent btnText={"Contact Us"} classN={"yellow-btn"}/>
            </div>
            <ImgComponent img={"/img/home/announcement.png"} alt={"announcement"} />
        </section>
    );
}