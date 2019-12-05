import React from "react";
import NameComponent from "./FormFields/NameComponent";
import AddressComponent from "./FormFields/AddressComponent";
import DOBComponent from "./FormFields/DOBComponent";
import ContactComponent from "./FormFields/ContactComponent";
import FinishComponent from "./FormFields/FinishComponent";
import ReviewComponent from "./FormFields/ReviewComponent";

export default class LibraryCardApplication extends React.Component{
    constructor(props) {
        super(props);
        this.updateName = this.updateName.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updateBirthDate = this.updateBirthDate.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',
            address: {
                address1:"",
                address2:"",
                city:"",
                zip:"",
                usState:"",
            },
            birthDate:{
                day:"",
                month:"",
                year:""
            },
            phoneNumber:"",
            email:"",
            emailLang:"ENG",
            contactMethod:"phone",
            subscribe:true,
            currentTarget:"name"
        }
    }

    updateName(payload){
        console.log(payload);
        this.setState({
            firstName:payload.firstName,
            middleName:payload.middleName,
            lastName:payload.lastName,
            currentTarget:"address"
        })
    }

    updateAddress(address, target){
        this.setState({
            address:address,
            currentTarget:target
        })
    }

    updateBirthDate(birthDate, target){
        this.setState({
            birthDate:birthDate,
            currentTarget:target
        })
    }

    updateContact(payload, target){
        this.setState({
            phoneNumber:payload.phoneNumber,
            email:payload.email,
            emailLang:payload.emailLang,
            contactMethod:payload.contactMethod,
            subscribe:payload.subscribe,
            currentTarget:target,
        })
    }

    updateReview(target){
        console.log("REVIEW " + target);
        this.setState({
            currentTarget:target
        })
    }
    render(){
        let firstName = this.state.firstName;
        let middleName = this.state.middleName;
        let lastName = this.state.lastName;
        return (
            <form className="usa-form">

                {this.state.currentTarget === "name" &&
                    <NameComponent
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        updateName={this.updateName}
                    />
                }

                {this.state.currentTarget === "address" &&
                    <AddressComponent
                        address={this.state.address}
                        updateAddress={this.updateAddress}
                        back={"name"}
                        next={"dob"}
                    />
                }

                {this.state.currentTarget === "dob" &&
                    <DOBComponent
                        birthDate={this.state.birthDate}
                        updateBirthDate={this.updateBirthDate}
                        back={"address"}
                        next={"contact"}
                    />
                }

                {this.state.currentTarget === "contact" &&
                    <ContactComponent
                        contactMethod={this.state.contactMethod}
                        phoneNumber={this.state.phoneNumber}
                        email={this.state.email}
                        emailLang={this.state.emailLang}
                        subscribe={this.state.subscribe}
                        updateContact={this.updateContact}
                        back={"dob"}
                        next={"finish"}
                    />
                }
                {
                    this.state.currentTarget === "finish" &&
                        <React.Fragment>
                            <ReviewComponent
                                state={this.state}
                                updateReview={this.updateReview}
                            />
                            <FinishComponent
                                back={"contact"}
                                next={"submit"}
                            />
                        </React.Fragment>
                }
            </form>
        )
    }
}