import React from 'react';
import { SvgImgComponent } from '../img/svgImgComponent';

export const DsAsideMenuItemComponent = ({ data }) => {
    return (
        <section className='aside-item'>
            <h2>{data.title}</h2>
            {
                data.content.map((item, key) => (
                    <div className={`aside-text ${item.isComingSoon ? "disabled" : ""}`} key={key}>
                        <div className='aside-text__item'>
                            <SvgImgComponent img={item.icon} />
                            <p>{item.text}</p>
                        </div>
                        {
                            item.isComingSoon &&
                            <span className='coming-soon'>Coming Soon</span>
                        }
                    </div>
                ))
            }
        </section>
    );
}