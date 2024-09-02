import React from "react";


export const NotificationsComponent = ({data, title,content,img,date }) => {
    return(
        data.map((item, key) => (
            <div className="notification-block" key={key}>
                <div className="not__block">
                    <div className="title-item">

                    <span>
                        {item.title}
                    </span>

                    </div>
                    <div className="content-item">
                        <p>
                            {
                                item.content
                            }
                        </p>
                        <p>
                            {
                                item.date
                            }
                        </p>
                    </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8L10 13L5 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        ))




    )
}