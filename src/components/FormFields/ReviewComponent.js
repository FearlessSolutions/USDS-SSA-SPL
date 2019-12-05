import React, { useState } from "react";

function ReviewComponent(props){

    function updateReview(target){
        console.log(target);
        props.updateReview(target)
    }
    return(

        <fieldset className="usa-fieldset">
            <legend className="usa-legend">Review your Information</legend>
            <div className={"reviewItem"}>
                Name: {props.state.firstName} {props.state.middleName} {props.state.lastName}
                <button className={"rightButton"} type={"button"} onClick={() => updateReview("name")}>Edit
                </button>
            </div>

            <div className={"reviewItem"}>
                Address: {props.state.address.address1} {props.state.address.address2} {props.state.address.city}, {props.state.address.usState} {props.state.address.zip}
                <button className={"rightButton"} type={"button"} onClick={() => updateReview("address")}>Edit
                </button>
            </div>

            <div className={"reviewItem"}>
                BirthDate: {props.state.birthDate.month}/{props.state.birthDate.day}/{props.state.birthDate.year}
                <button className={"rightButton"} type={"button"} onClick={() => updateReview("dob")}>Edit
                </button>
            </div>

            <div className={"reviewItem"}>
                Phone Number: {props.state.phoneNumber}
                <button className={"rightButton"} type={"button"} onClick={() => updateReview("contact")}>Edit
                </button>
            </div>

            <div className={"reviewItem"}>
                Email: {props.state.email} (Preferred Language: {props.state.emailLang})
                <button className={"rightButton"} type={"button"} onClick={() => updateReview("contact")}>Edit
                </button>
            </div>
        </fieldset>
    )
}

export default ReviewComponent