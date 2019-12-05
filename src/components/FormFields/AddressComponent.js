import React, { useState } from "react";

function AddressComponent(props){
    let address = props.address;
    const [address1, setAddress1] = useState(address.address1);
    const [address2, setAddress2] = useState(address.address2);
    const [city, setCity] = useState(address.city);
    const [zip, setZip] = useState(address.zip);
    const [usState, setUSState] = useState(address.usState);

    const showNext = address1 && city && zip && usState;

    function updateAddress(target){
        props.updateAddress({
            address1:address1,
            address2:address2,
            city:city,
            zip:zip,
            usState:usState
        }, target)
    }

    return(
        <fieldset className="usa-fieldset">
            <legend className="usa-legend">Mailing address</legend>
            <label className="usa-label" htmlFor="mailing-address-1">Street address 1</label>
            <input
                onChange={e => setAddress1(e.target.value)}
                value={address1}
                className="usa-input" id="mailing-address-1" name="mailing-address-1" type="text"/>

            <label className="usa-label" htmlFor="mailing-address-2">Street address 2 <span
                className="usa-hint">(optional)</span></label>
            <input
                onChange={e => setAddress2(e.target.value)}
                value={address2}
                className="usa-input" id="mailing-address-2" name="mailing-address-2" type="text"/>

            <div className="grid-row grid-gap">
                <div className="mobile-lg:grid-col-8">
                    <label className="usa-label" htmlFor="city">City</label>
                    <input
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        className="usa-input" id="city" name="city" type="text"/>
                </div>
                <div className="mobile-lg:grid-col-4">
                    <label className="usa-label" htmlFor="state">State</label>
                    <select
                        onChange={e => setUSState(e.target.value)}
                        value={usState}
                        className="usa-select" id="state" name="state">
                        <option value>- Select -</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                        <option value="AA">AA - Armed Forces Americas</option>
                        <option value="AE">AE - Armed Forces Africa</option>
                        <option value="AE">AE - Armed Forces Canada</option>
                        <option value="AE">AE - Armed Forces Europe</option>
                        <option value="AE">AE - Armed Forces Middle East</option>
                        <option value="AP">AP - Armed Forces Pacific</option>
                    </select>
                </div>
            </div>

            <label className="usa-label" htmlFor="zip">ZIP</label>
            <input onChange={e => setZip(e.target.value)}
                   value={zip}
                   className="usa-input usa-input--medium" id="zip" name="zip" type="text"
                   pattern="[\d]{5}(-[\d]{4})?"
            />

            <button type={"button"} onClick={() => updateAddress(props.back)}>Back
            </button>
            {
                showNext &&
                <button type={"button"} onClick={() => updateAddress(props.next)}>Next
                </button>
            }
        </fieldset>
    )
}

export default AddressComponent