import React from "react";
import { StyledContainer } from "./styles/Container.styles";
import { SideBar } from "./SideBar";
import Header from "./Header";
import { Form } from "./styles/YourInfoForm.styles";
import { StyledNextStep } from "./styles/Button.styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeEmail,
  changePhone,
  changeIsInfoValid,
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from "../store";

const YourInfo = () => {
  const dispatch = useDispatch();
  const { name, email, phone, isInfoValid } = useSelector((state) => {
    return {
      name: state.info.name,
      email: state.info.email,
      phone: state.info.phone,
      isInfoValid: state.info.isInfoValid,
    };
  });

  const selectSelectPlan = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(true));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };

  const handleClick = () => {
    // event.preventDefault()
    if (name.length === 0) {
      alert("Enter your name");
      return;
    }
    if (email.length === 0) {
      alert("Enter thep email address");
      return;
    }
    let countSpecialCharacters = 0;
    for (let i = 0; i < email.length; i++) {
      const specialChars = [".", "@"];
      if (specialChars.includes(email[i])) {
        countSpecialCharacters++;
      }
    }
    if (countSpecialCharacters === 0) {
      alert("Enter valid email address");
      return;
    }
    if (phone.length === 0) {
      alert("Enter the phone number");
      return;
    }
    if (phone.length < 10) {
      alert("Enter valid phone number");
      return;
    }
    dispatch(changeIsInfoValid(true));
    selectSelectPlan();
    return true;
  };

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleEmailChange = (event) => {
    dispatch(changeEmail(event.target.value));
  };
  const handlePhoneChange = (event) => {
    dispatch(changePhone(event.target.value));
  };

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
            name={name}
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="emailId">Email Address</label>
          <input
            id="emailId"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            name={email}
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="phoneId">Phone Number</label>
          <input
            id="phoneId"
            type="text"
            placeholder="e.g. +1 234 567 890"
            name={phone}
            value={phone}
            onChange={handlePhoneChange}
          />
        </Form>
        <Link to="/SelectPlan" onClick={selectSelectPlan}>
          <StyledNextStep>Next Step</StyledNextStep>
        </Link>
        {/* Trying with Handle Click but this also required 2 clicks */}
        {/* <Link to={isInfoValid ? '/SelectPlan' : '/'} onClick={handleClick}><StyledNextStep>Next Step</StyledNextStep></Link> */}

        {/* Running validateForm function on click and navigating after checking the form validation. This required 2 clicks*/}
        {/* <Link onClick={() => {validateForm()&& selectSelectPlan()}} to={isInfoValid ? '/SelectPlan' : '/'}><StyledNextStep>Next Step</StyledNextStep></Link> */}
      </main>
    </StyledContainer>
  );
};

export default YourInfo;
