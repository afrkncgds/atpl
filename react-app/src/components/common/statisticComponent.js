import React from 'react';
import { SvgImgComponent } from '../img/svgImgComponent';

export const StatisticComponent = ({ data, title }) => {
    return (
        <section className='statistic'>
            <h2>{title}</h2>
            <div className={`statistic-block ${data.length === 3 ? "triple" : ""}`}>
                {
                    data && data.map((item, key) => (
                        <div className="statistic-item" key={key}>
                            <SvgImgComponent img={item.icon} classN={"white-bg"} />
                            <span>{item.amount}</span>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}