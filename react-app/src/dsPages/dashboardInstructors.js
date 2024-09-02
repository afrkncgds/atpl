import React from 'react';
import CalendarComponent from "../components/common/calendarComponent";
import { DsAsideMenuComponent } from '../components/dsComponents/dsAsideMenuComponent';
import { StatisticComponent } from '../components/common/statisticComponent';
import { LineListContainerComponent } from '../components/list/lineListContainerComponent';

const DashboardInstructors = () => {
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
    const asideData = [
        {
            title: "Student Management",
            content: [
                {
                    icon: "group.svg",
                    text: "My Students"
                },
                {
                    icon: "student.svg",
                    text: "Student Groups"
                },
                {
                    icon: "addPerson.svg",
                    text: "Student Registration"
                },
                {
                    icon: "greyReport.svg",
                    text: "Reports",
                    isComingSoon: true
                }
            ]
        },
        {
            title: "Test Management",
            content: [
                {
                    icon: "createFile.svg",
                    text: "Create Test"
                },
                {
                    icon: "copyFile.svg",
                    text: "Saved Tests"
                }
            ]
        },
        {
            title: "School Management",
            content: [
                {
                    icon: "packages.svg",
                    text: "My Packages"
                },
                {
                    icon: "person.svg",
                    text: "Instructors Management"
                }
            ]
        }
    ]
    const lineList = [
        {
            text: "Oscar Manuel De La Nuez Kusznierz",
            icon: "studentPurple.svg"
        },
        {
            text: "Desiare Herwitz",
            icon: "studentPurple.svg"
        },
        {
            text: "Talan Siphron"
        },
        {
            text: "Marley Rosser",
            icon: "studentPurple.svg"
        },
        {
            text: "Ahmad Calzoni",
            icon: "studentPurple.svg"
        },
        {
            text: "Lincoln George Sharon Brown",
            icon: "studentPurple.svg"
        },
        {
            text: "Phillip Botosh",
            icon: "studentPurple.svg"
        }
    ]
    return (
        <div className='dashboard page-common '>
            <div className="background-item"/>
            <div className="safe-area dashboard-container">
                <DsAsideMenuComponent data={asideData}/>
                <div>
                    <StatisticComponent title="LMS Statistics" data={statistic}/>
                    <LineListContainerComponent data={lineList} title={"Recently Added Students"}/>
                </div>
                <CalendarComponent/>
            </div>
        </div>
    );
}

export default DashboardInstructors;