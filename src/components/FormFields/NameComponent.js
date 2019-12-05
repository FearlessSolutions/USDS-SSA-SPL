import React, { useState } from "react";

function NameComponent (props){

    const [firstName, setFirstName] = useState(props.firstName);
    const [middleName, setMiddleName] = useState(props.middleName);
    const [lastName, setLastName] = useState(props.lastName);

    function updateName() {
        props.updateName({
            firstName:firstName,
            middleName:middleName,
            lastName:lastName,
        });
    }

    return (
        <React.Fragment>
            <fieldset className="usa-fieldset">
                <legend className="usa-legend">Name</legend>

                <label className="usa-label" htmlFor="first-name">First name</label>
                <input onChange={e => setFirstName(e.target.value)}
                       value={firstName}
                       className="usa-input"
                       id="first-name"
                       name="first-name"
                       type="text"
                       required aria-required="true"
                      />

                <label className="usa-label" htmlFor="middle-name">
                    Middle name
                    <span className="usa-hint">(optional)</span>
                </label>
                <input onChange={e => setMiddleName(e.target.value)}
                       value={middleName}
                       className="usa-input" id="middle-name" name="middle-name" type="text"/>

                <label className="usa-label" htmlFor="last-name">Last name</label>
                <input onChange={e => setLastName(e.target.value)}
                       value={lastName}
                       className="usa-input" id="last-name" name="last-name" type="text" required
                       aria-required="true"/>
            </fieldset>
            {
                firstName && lastName &&
                <button type={"button"} onClick={() => updateName()}>Next
                </button>
            }
        </React.Fragment>
    )

}

export default NameComponent;