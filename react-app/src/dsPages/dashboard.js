import React from 'react';
import CalendarComponent from "../components/common/calendarComponent";
import { DsAsideMenuComponent } from '../components/dsComponents/dsAsideMenuComponent';
import { StatisticComponent } from '../components/common/statisticComponent';

const Dashboard = () => {
    const statistic = [
        {
            icon: "groupPurple.svg",
            amount: "3248",
            text: "Registered students"
        },
        {
            icon: "personPurple.svg",
            amount: "16",
            text: "Instructors"
        },
        {
            icon: "clock.svg",
            amount: "24",
            text: "Students waiting for invitation approval"
        }
    ]
    return (
        <div className='dashboard page-common '>
            <div className="background-item"/>
            <div className="safe-area dashboard-container">
                <DsAsideMenuComponent/>
                <div>
                    <StatisticComponent title="LMS Statistics" data={statistic}/>
                </div>
                {/* <CalendarComponent/> */}
            </div>
        </div>
    );
}

export default Dashboard;