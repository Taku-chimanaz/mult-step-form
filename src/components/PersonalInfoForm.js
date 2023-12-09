import React, { useRef, useState } from 'react';
import './../css/PersonalInfoForm.css';

export const PersonalInfoForm = ({ activeStep, setActiveStep }) => {

    const storedPersonalInfo = JSON.parse(localStorage.getItem('personal-info'));
    const [nameInput, setNameInput] = useState(storedPersonalInfo !== null ? storedPersonalInfo.name : '');
    const [emailInput, setEmailInput] = useState(storedPersonalInfo !== null ? storedPersonalInfo.email : '');
    const [phoneInput, setPhoneInput] = useState(storedPersonalInfo !== null ? storedPersonalInfo.phone : '');
    const [inputWithError, setInputWithError] = useState('');


    const submitForm = (e) => {

        e.preventDefault();

        if (nameInput.length === 0 && phoneInput.length === 0 && emailInput.length === 0) {
            setInputWithError('all')
            return;
        }

        if (nameInput.length === 0) {
            console.log('run')
            setInputWithError('name')
            return;
        }


        if (emailInput.length === 0) {
            setInputWithError('email')
            return;
        }


        if (phoneInput.length === 0) {
            setInputWithError('phone')
            return;
        }


        const personInfoObj = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput
        }


        localStorage.setItem('personal-info', JSON.stringify(personInfoObj));
        setActiveStep(activeStep + 1);





    }
    return (

        <article className="personal-form-container">

            <div className="personal-form__header">
                <h1 className="personal-form__heading">
                    Personal info
                </h1>

                <p className="personal-form__details">
                    Please provide your name,email address,and phone number
                </p>

            </div>

            <form className="personal-form">

                <div className="name-input-contents">
                    <div className="label-field-text-container">
                        <label htmlFor="name">
                            Name
                        </label>
                        {
                            (inputWithError === 'name' || inputWithError === 'all') &&
                            <FieldRequired />
                        }
                    </div>
                    <div className="name-input-container">
                        <input
                            value={nameInput}
                            onChange={e => setNameInput(e.target.value)}
                            type="text"
                            placeholder='Enter your full name'
                        />
                    </div>
                </div>

                <div className="email-input-contents">
                    <div className="label-field-text-container">
                        <label htmlFor="email">
                            Email Address
                        </label>
                        {
                            (inputWithError === 'email' || inputWithError === 'all') &&
                            <FieldRequired />
                        }
                    </div>
                    <div className="email-input-container">
                        <input
                            value={emailInput}
                            onChange={e => setEmailInput(e.target.value)}
                            type="text"
                            placeholder='Enter your email address'
                        />
                    </div>
                </div>

                <div className="phone-input-contents">
                    <div className="label-field-text-container">
                        <label htmlFor="phobe number">
                            phone number
                        </label>
                        {
                            (inputWithError === 'phone' || inputWithError === 'all') &&
                            <FieldRequired />
                        }
                    </div>
                    <div className="phone-input-container">
                        <input
                            value={phoneInput}
                            onChange={e => setPhoneInput(e.target.value)}
                            type="text"
                            placeholder='e.g +1 234 567 890'
                        />
                    </div>
                </div>

                <div className="personal-back-next-btns-container">

                    <button className="next" onClick={e => submitForm(e)}>
                        new step
                    </button>
                </div>
            </form>
        </article>
    )
}

const FieldRequired = () => {

    return (
        <p className='field-is-required'>
            This field is required
        </p>
    )
}
