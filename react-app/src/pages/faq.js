import React from 'react';
import {BreadcrumbComponent} from "../components/common/breadcrumbComponent";
import {TitleComponent} from "../components/common/titleComponent";


const Faq = () => {

    return (
        <div className='faq page-common safe-area'>
            <BreadcrumbComponent title={"Frequently Asked Questions"}/>
            <div className="faq__cnt">
                <TitleComponent title={"Frequently Asked Questions"}/>
            </div>

        </div>
    );
}

export default Faq;