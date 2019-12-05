import React, { useState } from "react";

function DOBComponent(props){
    let birthDate = props.birthDate;
    const [day, setDay] = useState(birthDate.day);
    const [month, setMonth] = useState(birthDate.month);
    const [year, setYear] = useState(birthDate.year);

    const showNext = day && month && year <= 2013 && year >= 1900;

    function updateBirthDate(target){
        props.updateBirthDate({
            day:day,
            month:month,
            year:year
        }, target)
    }

    return(
        <fieldset className="usa-fieldset">
            <legend className="usa-legend">Date of birth</legend>
            <span className="usa-hint" id="dobHint">For example: 04 28 1986</span>
            <div className="usa-memorable-date">
                <div className="usa-form-group usa-form-group--month">
                    <label className="usa-label" htmlFor="date_of_birth_1">Month</label>
                    <input
                        onChange={e => setMonth(e.target.value)}
                        value={month}
                        className="usa-input usa-input--inline" aria-describedby="dobHint" id="date_of_birth_1"
                        name="date_of_birth_1" type="number" />
                </div>
                <div className="usa-form-group usa-form-group--day">
                    <label className="usa-label" htmlFor="date_of_birth_2">Day</label>
                    <input
                        onChange={e => setDay(e.target.value)}
                        value={day}
                        className="usa-input usa-input--inline" aria-describedby="dobHint" id="date_of_birth_2"
                        name="date_of_birth_2" type="number" />
                </div>
                <div className="usa-form-group usa-form-group--year">
                    <label className="usa-label" htmlFor="date_of_birth_3">Year</label>
                    <input
                        onChange={e => setYear(e.target.value)}
                        value={year}
                        className="usa-input usa-input--inline" aria-describedby="dobHint" id="date_of_birth_3"
                        name="date_of_birth_3" type="number" />
                </div>
            </div>

            <button type={"button"} onClick={() => updateBirthDate(props.back)}>Back
            </button>
            {
                showNext &&
                <button type={"button"} onClick={() => updateBirthDate(props.next)}>Next
                </button>
            }
        </fieldset>
    )
}

export default DOBComponent