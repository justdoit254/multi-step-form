import React from "react";
import { StyledContainer } from "./styles/Container.styles";
import { SideBar } from "./SideBar";
import Header from "./Header";
import { Form } from "./styles/YourInfoForm.styles";
import { StyledNextStep } from "./styles/Button.styles";
import { Link } from "react-router-dom";

const YourInfo = (props) => {
    
     React.useEffect(function() {
    console.log("Render Info");
  }, [props.yourInfo])

    const [formValid, setFormValid] = React.useState(false)

    function validateForm(event) {
        // event.preventDefault()
        if(props.yourInfo.name.length === 0) {
            alert("Enter your name")
            return
        }
        if (props.yourInfo.email.length === 0) {
            alert("Enter thep email address")
            return
        }
        let countSpecialCharacters = 0
        for (let i = 0; i < props.yourInfo.email.length; i++) {
            const specialChars = ['.', '@']
            if(specialChars.includes(props.yourInfo.email[i])) {
                countSpecialCharacters++;
            }
        }
        if (countSpecialCharacters === 0) {
            alert("Enter valid email address")
            return
        }
        if (props.yourInfo.phone.length === 0) {
            alert("Enter the phone number")
            return
        }
        if (props.yourInfo.phone.length < 10) {
            alert("Enter valid phone number")
            return
        }
        setFormValid(true)
    }

    // let nextStep = <Link to='/'><StyledNextStep>Next Step</StyledNextStep></Link>
    // if (isFormValid) {
    //     nextStep = <Link to='/SelectPlan'><StyledNextStep>Next Step</StyledNextStep></Link>
    // } else {
    //     nextStep = <Link to='/'><StyledNextStep>Next Step</StyledNextStep></Link>
    //     alert("Please enter all the details!")
    // }

   return (
    <StyledContainer>
        <SideBar />
            <main>
                <Header 
                    heading="Personal info"
                    text="Please provide your name, email address and phone number."
                />
                <Form>
                    <label htmlFor="nameId">Name</label>
                    <input 
                        id="nameId"
                        type="text"
                        placeholder="e.g. Stephen King"
                        name="name"
                        value={props.yourInfo.name}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="emailId">Email Address</label>
                    <input 
                        id="emailId"
                        type="email"
                        placeholder="e.g. stephenking@lorem.com"
                        name="email"
                        value={props.yourInfo.email}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="phoneId">Phone Number</label>
                    <input 
                        id="phoneId"
                        type="text"
                        placeholder="e.g. +1 234 567 890"
                        name="phone"
                        value={props.yourInfo.phone}
                        onChange={props.handleChange}
                    />
                </Form>
                <Link to={formValid ? '/SelectPlan' : '/'}><StyledNextStep onClick={validateForm}>Next Step</StyledNextStep></Link>
            </main>
    </StyledContainer>
   )
}

export default YourInfo