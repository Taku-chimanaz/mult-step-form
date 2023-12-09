import './../css/ThankYou.css';
import ThankYouIcon from './../images/icon-thank-you.svg';

export const ThankYou = () => {



    return (

        <article className="thank-you-form-container">

            <div className="thank-you-contents">

                <div className="thank-you-img-container">
                    <img src={ThankYouIcon} alt="Thank you Icon" />
                </div>

                <p className="thank-you-text">
                    Thank you!
                </p>

                <p className="thank-you-para">
                    Confirm Thank you! Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </article>
    )
}
