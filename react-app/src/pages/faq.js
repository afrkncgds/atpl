import React from 'react';
import {BreadcrumbComponent} from "../components/common/breadcrumbComponent";
import {TitleComponent} from "../components/common/titleComponent";
import {FaqComponent} from "../components/common/faqComponent";


const Faq = ({title,content}) => {
    const  faqArr = [
        {
            title:"1. What is ATPLQuestions.com?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        },
        {
            title:"2. What subjects are covered in the question bank?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        },
        {
            title:"3. Are the questions on ATPLQuestions.com similar to the actual ATPL exams?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        },
        {
            title:"4. Can I track my progress and performance on the platform?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        }, {
            title:"5. Are the study resources regularly updated?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        },
        {
            title:"6. What is ATPLQuestions.com?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        },
        {
            title:"7. What subjects are covered in the question bank?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        },
        {
            title:"8. Can I track my progress and performance on the platform?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        },
        {
            title:"9. Are the study resources regularly updated?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        },
        {
            title:"10. What subjects are covered in the question bank?",
            img:"/img/svg/chevron-down.svg",
            content:"Yes, the questions on ATPLQuestions.com are designed to mirror the format and difficulty level of the actual ATPL exams. They are created to help candidates familiarize themselves with the types of questions they are likely to encounter and to assess their understanding of the subject matter."
        }
    ]

    return (
        <div className='faq page-common safe-area'>
            <BreadcrumbComponent title={"Frequently Asked Questions"}/>
            <div className="faq__cnt">
                <TitleComponent title={"Frequently Asked Questions"}/>
                <div className="faq-wrapper">
                    <FaqComponent data={faqArr}/>


                </div>
            </div>

        </div>
    );
}

export default Faq;