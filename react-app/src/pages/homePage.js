import React from 'react';
import { TextListComponent } from '../components/list/textListComponent';

const HomePage = () => {
    const listArr = ["Personalised study plan for your students.", "Overview of student progress and activities.", "Schedule events and exams for your students."]
    return (
        <div className='home page-common'>
            <h2>The Main Features</h2>
            <TextListComponent data={listArr} detail="Basically you can manage everything about your student and students’ progress." icon={"tick.svg"}/>
        </div>
    );
}

export default HomePage;