import React from 'react';
import {TitleComponent} from "../components/common/titleComponent";
import {NotificationsComponent} from "../components/dsComponents/notificationsComponent";


const Notifications = () => {
    const  notArr = [
        {
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img:"/img/svg/chevron-down.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            date:"28 Agu '24 | 09:04"
        },
        {
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img:"/img/svg/chevron-down.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            date:"28 Agu '24 | 09:04"
        },
        {
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img:"/img/svg/chevron-down.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            date:"28 Agu '24 | 09:04"
        },
        {
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img:"/img/svg/chevron-down.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            date:"28 Agu '24 | 09:04"
        },
        {
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img:"/img/svg/chevron-down.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            date:"28 Agu '24 | 09:04"
        },
        {
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img:"/img/svg/chevron-down.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            date:"28 Agu '24 | 09:04"
        },

    ]
    return (
        <div className='notifications page-common '>
            <div className="safe-area">
               <div className="notifications__cnt">
                   <TitleComponent title={"Frequently Asked Questions"}/>
                   <div className="notifications-wrapper">
                       <NotificationsComponent data={notArr}/>
                   </div>
               </div>

            </div>
        </div>
    );
}

export default Notifications;