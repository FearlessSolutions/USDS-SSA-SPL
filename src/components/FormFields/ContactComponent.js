import React, { useState } from "react";

function ContactComponent(props){

    const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
    const [email, setEmail] = useState(props.email);
    const [emailLang, setEmailLang] = useState(props.emailLang);
    const [contactMethod, setContactMethod] = useState(props.contactMethod);
    const [subscribe, setSubscribe] = useState(props.subscribe);

    const langs = {
        "ENG":"English",
        "CHI":"中文",
        "SOM":"Soomaali",
        "SPA":"Español",
        "VIE":"Tiếng Việt"

    };

    const showNext = phoneNumber.length === 10 && email.indexOf("@") > 1 && email.indexOf(".") > email.indexOf("@");
    function updateContact(target){
        props.updateContact({
            phoneNumber:phoneNumber,
            email:email,
            emailLang:emailLang,
            contactMethod:contactMethod,
            subscribe:subscribe
        }, target)
    }
    console.log(subscribe);
    return(
        <fieldset className="usa-fieldset">
            <legend className="usa-legend">Contact Information</legend>

            <label className="usa-label" htmlFor="phone-number">Phone Number</label>
            <input
                onChange={e => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="usa-input"
                id="phone-number"
                name="phone-number"
                type="text"
                required aria-required="true"
            />
            <label className="usa-label" htmlFor="email">Email Address</label>
            < input
                onChange={e => setEmail(e.target.value)}
                value={email}
                className="usa-input" id="email" name="email" type="text"
            />
            <label className="usa-label" htmlFor="contactMethod">Prefered Contact Method</label>
            <div className="usa-radio" >
                <input checked={contactMethod === "phone"}
                       onChange={() => setContactMethod("phone")}
                       className="usa-radio__input" id="phoneContact" type="radio" name="contactMethod"
                       value={"phone"}/>
                <label className="usa-radio__label" htmlFor={"phoneContact"}>Phone (Using TeleCirc, an automated voice response system)</label>
            </div>

            <div className="usa-radio" >
                <input checked={contactMethod === "email"}
                       onChange={() => setContactMethod("email")}
                       className="usa-radio__input" id="emailContact" type="radio" name="contactMethod"
                       value={"email"}/>
                <label className="usa-radio__label" htmlFor={"emailContact"}>Email</label>
            </div>

            {
                contactMethod === "email" &&
                    <React.Fragment>


                        <label className="usa-label" htmlFor="email-lang">Preferred Email Language</label>

                        {
                            Object.keys(langs).map((lang) => {
                            return (
                            <div className="usa-radio" key={lang} >
                            <input checked={emailLang === lang}
                            onChange={() => setEmailLang(lang)}
                            className="usa-radio__input" id={lang} type="radio" name="email-lang"
                            value={lang}/>
                            <label className="usa-radio__label" htmlFor={lang}>{langs[lang]}</label>
                            </div>
                            )
                        })
                        }

                        <div className="usa-checkbox">
                            <input
                                onChange={(e) => setSubscribe(e.target.checked)}
                                className="usa-checkbox__input" id="subscribe" type="checkbox"
                                name="subscribe" value="subscribe" checked={subscribe}/>
                                <label className="usa-checkbox__label" htmlFor="subscribe">I would like to receive periodic emails about Library news, special events and activities from the Library and the Foundation? </label>
                        </div>
                    </React.Fragment>

            }

            <button type={"button"} onClick={() => updateContact(props.back)}>Back
            </button>
            {
                showNext &&
                <button type={"button"} onClick={() => updateContact(props.next)}>Next
                </button>
            }
        </fieldset>
    )
}

export default ContactComponent