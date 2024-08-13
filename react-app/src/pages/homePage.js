import React from 'react';
import { TextListComponent } from '../components/list/textListComponent';
import {BannerTextComponent} from '../components/banner/bannerTextComponent';
import {BannerImgComponent} from '../components/banner/bannerImgComponent';
import {BannerMaskComponent} from "../components/banner/bannerMaskComponent";

const HomePage = () => {
    const listArr = ["Personalised study plan for your students.", "Overview of student progress and activities.", "Schedule events and exams for your students."]
    return (
        <div className='home page-common'>
            <section className="banner">
                <BannerMaskComponent mask={"../img/banner/bannerBg.png"}/>
                <BannerTextComponent/>
                <BannerImgComponent/>

            </section>
            <section className='safe-area'>
                <h2>The Main Features</h2>
                <TextListComponent data={listArr} detail="Basically you can manage everything about your student and students’ progress." icon={"tick.svg"} />
            </section>
        </div>
    );
}

export default HomePage;