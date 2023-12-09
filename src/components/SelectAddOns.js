import React, { useState } from 'react';
import './../css/SelectAddOns.css';

export const SelectAddOns = ({ activeStep, setActiveStep }) => {


    const extractAddOns = (addOnObject) => {

        const addOns = Object.entries(addOnObject).map(entry => {
            const key = entry[0].split('_');
            return `${key[0]} ${key[1]}`;
        })

        return addOns;
    }

    const storedPersonalInfo = JSON.parse(localStorage.getItem('plan-info'));
    const addOns = JSON.parse(localStorage.getItem('add-ons'));
    const isYearly = storedPersonalInfo.isYearly
    const [activeCards, setActiveCards] = useState(addOns === null ? [] : extractAddOns(addOns));
    const addOnsMothlyPrices = {
        onlineServices: 1,
        largeStorage: 2,
        customizableProfile: 2
    };
    console.log(activeCards)






    const submitForm = (e) => {

        e.preventDefault();

        if (activeCards.length === 0) {
            setActiveStep(activeStep + 1);
            localStorage.removeItem('add-ons');
        } else {
            const selectedAddOns = {};
            activeCards.forEach(card => {

                if (card === 'Online Services') {
                    selectedAddOns['Online_Services'] = isYearly ?
                        addOnsMothlyPrices.onlineServices * 10 : addOnsMothlyPrices.onlineServices;
                    return;
                }

                if (card === 'Large Storage') {
                    selectedAddOns['Large_Storage'] = isYearly ?
                        addOnsMothlyPrices.largeStorage * 10 : addOnsMothlyPrices.largeStorage;
                    return;
                }

                if (card === 'Customizable Profile') {
                    selectedAddOns['Customizable_Profile'] = isYearly ?
                        addOnsMothlyPrices.customizableProfile * 10 : addOnsMothlyPrices.customizableProfile;
                    return;
                }
            });
            localStorage.setItem('add-ons', JSON.stringify(selectedAddOns));
            setActiveStep(activeStep + 1);
        }


    }


    const changeActiveCards = (name) => {

        const cardIsAlreadyActive = activeCards.includes(name);

        if (cardIsAlreadyActive) {
            const newActiveCards = activeCards.filter(card => card !== name);
            setActiveCards(newActiveCards)
        } else {
            setActiveCards([...activeCards, name]);
        }
    }


    return (

        <article className="add-ons-form-container">

            <div className="add-ons-form__header">
                <h1 className="add-ons-form__heading">
                    Pick add-ons
                </h1>

                <p className="add-ons-form__details">
                    Add-ons help enhance your gaming exprience.
                </p>

            </div>


            <div className="add-ons-container">

                <AddOn
                    name={'Online Services'}
                    desc={'Access to multiplayer games'}
                    price={isYearly ? `+\$${addOnsMothlyPrices.onlineServices * 10}/yr` : `+\$${addOnsMothlyPrices.onlineServices}/mo`}
                    activeCards={activeCards}
                    changeActiveCards={changeActiveCards}
                />

                <AddOn
                    name={'Large Storage'}
                    desc={'Extra 1TB of cloud save'}
                    price={isYearly ? `+\$${addOnsMothlyPrices.largeStorage * 10}/yr` : `+\$${addOnsMothlyPrices.largeStorage}/mo`}
                    activeCards={activeCards}
                    changeActiveCards={changeActiveCards}
                />

                <AddOn
                    name={'Customizable Profile'}
                    desc={'Custom theme on your profile'}
                    price={isYearly ? `+\$${addOnsMothlyPrices.customizableProfile * 10}/yr` : `+\$${addOnsMothlyPrices.customizableProfile}/mo`}
                    activeCards={activeCards}
                    changeActiveCards={changeActiveCards}
                />

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

const AddOn = ({ name, desc, price, activeCards, changeActiveCards }) => {

    const isSelected = activeCards.includes(name);
    return (
        <article className={`add-on ${isSelected && 'active-plan'}`}>


            <div className="checkbox-container">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onClick={() => changeActiveCards(name)}
                />
            </div>

            <div className="add-on-details">
                <p className="add-on-name">
                    {name}
                </p>

                <p className="add-on-desc">
                    {desc}
                </p>
            </div>

            <div className="price">
                {price}
            </div>


        </article>
    )
}