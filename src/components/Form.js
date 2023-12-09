import React, { useState } from 'react';
import './../css/Form.css';
import { StepsContainer } from './StepsContainer';
import { PersonalInfoForm } from './PersonalInfoForm';
import { SelectPlanForm } from './SelectPlanForm';
import { SelectAddOns } from './SelectAddOns';
import { FinishingUp } from './FinishingUp';
import { ThankYou } from './ThankYou';


export const Form = () => {

    const [activeStep, setActiveStep] = useState(1);
    const forms = [
        <PersonalInfoForm activeStep={activeStep} setActiveStep={setActiveStep} />,
        <SelectPlanForm activeStep={activeStep} setActiveStep={setActiveStep} />,
        <SelectAddOns activeStep={activeStep} setActiveStep={setActiveStep} />,
        <FinishingUp activeStep={activeStep} setActiveStep={setActiveStep} />,
        <ThankYou />

    ]

    return (

        <section className="form-section">

            <div className="steps-side">
                <StepsContainer
                    activeStep={activeStep}
                />
            </div>

            <div className="form-side">
                {forms[activeStep - 1]}
            </div>

        </section>
    )
}
