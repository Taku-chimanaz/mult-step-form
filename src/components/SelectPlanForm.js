import React, { useState } from 'react';
import './../css/SelectPlanForm.css';
import ArcadeIcon from './../images/icon-arcade.svg';
import AdvancedIcon from './../images/icon-advanced.svg';
import ProIcon from './../images/icon-pro.svg';

export const SelectPlanForm = ({ activeStep, setActiveStep }) => {

    const storedPersonalInfo = JSON.parse(localStorage.getItem('plan-info'));
    const storedPlanInfo = JSON.parse(localStorage.getItem('plan-info'));
    const [activeCard, setActiveCard] = useState(storedPlanInfo !== null ? storedPlanInfo.plan : '');
    const [checked, setChecked] = useState(false);
    const monthlyPrices = {
        arcade: 9,
        advanced: 12,
        pro: 15,

    }


    const handleToggle = () => {
        setChecked(!checked);
    };

    const submitForm = (e) => {

        e.preventDefault();

        if (activeCard.length === 0) {
            return
        }

        const plan = activeCard.toLowerCase();

        const planObj = {
            plan,
            isYearly: checked,
            price: checked ? monthlyPrices[plan] * 10 : monthlyPrices[plan]
        }

        localStorage.setItem('plan-info', JSON.stringify(planObj));
        setActiveStep(activeStep + 1);

    }


    const changeActiveCard = (name) => {
        setActiveCard(name)
    }
    return (

        <article className="select-plan-form-container">

            <div className="select-plan-form__header">
                <h1 className="personal-form__heading">
                    Select your plan
                </h1>

                <p className="select-plan-form__details">
                    You have the option of monthly and yearly billing
                </p>

            </div>


            <div className="plans-container">

                <Plan
                    icon={ArcadeIcon}
                    name={'Arcade'}
                    price={checked ? '$90/yr' : '$9/mo'}
                    isYearly={checked}
                    activeCard={activeCard}
                    changeActiveCard={changeActiveCard}
                />

                <Plan
                    icon={AdvancedIcon}
                    name={'Advanced'}
                    price={checked ? '$120/yr' : '$12/mo'}
                    isYearly={checked}
                    activeCard={activeCard}
                    changeActiveCard={changeActiveCard}
                />

                <Plan
                    icon={ProIcon}
                    name={'Pro'}
                    price={checked ? '$150/yr' : '$15/mo'}
                    isYearly={checked}
                    activeCard={activeCard}
                    changeActiveCard={changeActiveCard}
                />
            </div>

            <div className="plan-duration-container">

                <p className="monthly" style={{ color: checked === false && 'hsl(213, 96%, 18%)' }}>
                    monthly
                </p>

                <div className="toggle-slider">
                    <input
                        type="checkbox"
                        id="toggle"
                        checked={checked}
                        onChange={handleToggle}
                    />
                    <label htmlFor="toggle" className="slider" />
                </div>

                <p className="yearly" style={{ color: checked === true && 'hsl(213, 96%, 18%)' }}>
                    yearly
                </p>
            </div>

            <div className="back-next-btns-container">
                <button className="back" onClick={() => setActiveStep(activeStep - 1)}>
                    go back
                </button>

                <button className="next" onClick={e => submitForm(e)}>
                    new step
                </button>
            </div>




        </article>
    )
}

const Plan = ({ icon, name, price, isYearly, activeCard, changeActiveCard }) => {

    return (
        <article className={`plan ${activeCard == name.toLowerCase() && 'active-plan'}`} onClick={() => changeActiveCard(name)}>

            <div className="plan-icon-container">
                <img src={icon} alt="Arcade Icon" />
            </div>

            <div className="plan-details">
                <p className="plan-name">
                    {name}
                </p>
                <p className="plan-price">
                    {price}
                </p>
                {
                    isYearly &&
                    <p className="free-period">
                        2 months free
                    </p>
                }
            </div>
        </article>
    )
}