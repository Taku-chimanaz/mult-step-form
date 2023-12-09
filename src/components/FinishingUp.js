import React, { useState } from 'react';
import './../css/FinishingUp.css';

export const FinishingUp = ({ activeStep, setActiveStep }) => {

    const plan = JSON.parse(localStorage.getItem('plan-info'));
    const addOns = JSON.parse(localStorage.getItem('add-ons'));


    const calculateTotalPrice = () => {

        let totalPrice = plan.price;


        if (addOns !== null) {
            Object.entries(addOns).forEach(entry => {
                totalPrice += entry[1];
            })
        }

        return totalPrice;
    }


    return (

        <article className="finishing-up-form-container">

            <div className="finishing-up-form__header">
                <h1 className="finishing-up-form__heading">
                    Finishing up
                </h1>

                <p className="finishing-up-form__details">
                    Double-check everything looks OK before confirming.
                </p>

            </div>


            <div className="final-details-container">

                <div className="plan-container">

                    <div className="plan-details-wrapper">
                        <p className="plan-details-wrapper__plan-name">
                            {plan.plan}
                        </p>
                        <a href="#" onClick={() => setActiveStep(2)}>Change</a>
                    </div>

                    <div className="plan-container__price-wrapper">
                        <p>{`\$${plan.price}${plan.isYearly ? '/yr' : '/mo'}`}</p>
                    </div>
                </div>

                <div className="final-addOns-container">

                    {
                        addOns !== null ?
                            Object.entries(addOns).map(entry => {
                                const splittedAddOnName = entry[0].split('_');
                                const addOn = `${splittedAddOnName[0]} ${splittedAddOnName[1]}`
                                return (
                                    <div className="final-addOns-container__add-on">
                                        <p>{addOn}</p>
                                        <p>{`+\$${entry[1]}${plan.isYearly ? '/yr' : '/mo'}`}</p>
                                    </div>
                                )
                            }) :
                            <p className="no-adds-on-added">
                                No Add-Ons added
                            </p>

                    }


                </div>


            </div>

            <div className="final-price-container">
                <div className="final-pricing-container">
                    <p>Total (per year)</p>
                    <p className='final-price'>${`${calculateTotalPrice()}${plan.isYearly ? '/yr' : '/mo'}`}</p>
                </div>
            </div>


            <div className="back-next-btns-container" style={{ marginTop: addOns === null && '6em' }}>
                <button className="back" onClick={() => setActiveStep(activeStep - 1)}>
                    go back
                </button>

                <button className="next" onClick={() => setActiveStep(5)}>
                    new step
                </button>
            </div>




        </article>
    )
}
