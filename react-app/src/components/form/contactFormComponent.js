import React from 'react'
import { Field, Form } from "react-final-form";
import { TextInputComponent } from '../formField/textInputComponent';
import { ButtonComponent } from '../button/buttonComponent';
import { TextAreaComponent } from '../formField/textareaComponent copy';
import { SelectBoxComponent } from '../formField/selectboxComponent';

export const ContactFormComponent = ({ title, text }) => {
    const validate = (values) => {
        const errors = {};

        return errors;
    };

    const submit = (values) => {

    };

    return (
        <section className='contact-form'>
            <div className='purple-bg'></div>
            <div className='content__block safe-area'>
                {
                    title &&
                    <h2>{title}</h2>
                }
                {
                    text &&
                    <p>{text}</p>
                }
                <Form
                    validate={validate}
                    onSubmit={submit}
                    render={({ handleSubmit, sumbitFailed }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='contact-form__block'>
                                <Field
                                    name="fullname"
                                    label="Full Name"
                                    type="text"
                                    component={TextInputComponent}
                                />
                                <Field
                                    name="subject"
                                    label="Subject"
                                    component={SelectBoxComponent}
                                    type='selectbox'
                                    options={[
                                        { value: 'option0', label: 'Select Subject' },
                                        { value: 'option1', label: 'LMS Demo Request' },
                                        { value: 'option2', label: 'LMS Student Subscriptions' },
                                        { value: 'option3', label: 'LMS Registration Request' },
                                        { value: 'option4', label: 'Other' }
                                    ]}
                                />
                            </div>
                            <div className='contact-form__block'>
                                <div className='contact-form__item'>
                                    <Field
                                        name="email"
                                        label="E-Mail Address"
                                        type="text"
                                        component={TextInputComponent}
                                    />
                                    <Field
                                        name="company"
                                        label="Company / School Name"
                                        type="text"
                                        component={TextInputComponent}
                                    />
                                </div>
                                <Field
                                    name="message"
                                    label="Message"
                                    type="textarea"
                                    component={TextAreaComponent}
                                />
                            </div>
                            <div className='contact-form__btn'>
                                <span className='form-info'>All fields are required to be filled.</span>
                                <ButtonComponent btnText={"Send Message"} classN={"yellow-btn"} />
                            </div>
                        </form>
                    )}
                ></Form>
            </div>
        </section>
    )
}
