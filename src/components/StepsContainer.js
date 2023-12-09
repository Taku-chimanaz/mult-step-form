import './../css/StepContainer.css';

export const StepsContainer = ({ activeStep }) => {
    return (
        <div className="steps-container">

            <Step
                stepNumber={1}
                stepValue={'your info'}
                activeStep={activeStep === 1 && true}
            />

            <Step
                stepNumber={2}
                stepValue={'select plan'}
                activeStep={activeStep === 2 && true}
            />

            <Step
                stepNumber={3}
                stepValue={'add-ons'}
                activeStep={activeStep === 3 && true}
            />

            <Step
                stepNumber={4}
                stepValue={'summary'}
                activeStep={activeStep === 4 && true}
            />
        </div>
    )
}
const Step = ({ stepNumber, stepValue, activeStep }) => {

    return (
        <div className="step">

            <div className={`step-number-container ${activeStep && 'active-step'}`}>
                <p style={{ color: activeStep && '#000' }}> {stepNumber}</p>
            </div>

            <div className="step-value-container">
                <p className="step-value__header">
                    step {stepNumber}
                </p>

                <p className="step-value-container__value">
                    {stepValue}
                </p>
            </div>
        </div>
    )
}
