import React from 'react';
import { DsAsideMenuItemComponent } from './dsAsideMenuItemComponent';

export const DsAsideMenuComponent = () => {
    const data = [
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
                    icon: "school.svg",
                    text: "School Profile"
                },
                {
                    icon: "person.svg",
                    text: "Instructors Management"
                }
            ]
        }
    ]
    return (
        <div className='aside-menu'>
            {
                data?.map((item, key)=>(
                    <DsAsideMenuItemComponent data={item} key={key}/>
                ))
            }
        </div>
    );
}