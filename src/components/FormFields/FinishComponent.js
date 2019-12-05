import React, { useState } from "react";

function FinishComponent(props){

    const [terms, setTerms] = useState(false);
    const [responsibility, setResponsibility] = useState(false);
    const [verify, setVerify] = useState(false);
    const showNext = terms && responsibility && verify;

    function submitForm(target){
        console.log("submitted")
    }

    return(

        <fieldset className="usa-fieldset">
            <legend className="usa-legend">Terms of Use</legend>
            <div className="usa-checkbox">
                <input
                    onChange={(e) => setTerms(e.target.checked)}
                    className="usa-checkbox__input" id="terms" type="checkbox"
                    name="terms" value="terms" checked={terms}/>
                <label className="usa-checkbox__label" htmlFor="terms">I understand parents or guardians are responsible for monitoring the reading, listening and viewing choices of children 12 and under. </label>
            </div>

            <div className="usa-checkbox">
                <input
                    onChange={(e) => setResponsibility(e.target.checked)}
                    className="usa-checkbox__input" id="responsibility" type="checkbox"
                    name="responsibility" value="responsibility" checked={responsibility}/>
                <label className="usa-checkbox__label" htmlFor="responsibility">I assume full responsibility for the use of this card and all charges associated with its use. </label>
            </div>

            <div className="usa-checkbox">
                <input
                    onChange={(e) => setVerify(e.target.checked)}
                    className="usa-checkbox__input" id="verify" type="checkbox"
                    name="verify" value="verify" checked={verify}/>
                <label className="usa-checkbox__label" htmlFor="verify">I verify that the information on this form is correct. </label>
            </div>

            <button type={"button"} onClick={() => submitForm(props.back)}>Back
            </button>
            {
                showNext &&
                <button type={"button"} onClick={() => submitForm(props.next)}>Next
                </button>
            }
        </fieldset>
    )
}

export default FinishComponent