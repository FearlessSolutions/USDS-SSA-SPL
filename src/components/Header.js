import React from "react";

function Header(){

    return(
        <React.Fragment>
            <div className="App-header">
                Library Card Application
            </div>
            <div>
                To apply online, you must be at least 13 years old and have photo ID.
                Children under age 13 may apply by downloading a child's card application.
                Applications are also available at any <a href={"https://www.spl.org/hours-and-locations"} target={"_blank"}>Library location</a>.
            </div>
        </React.Fragment>
    )
    
}
export default Header