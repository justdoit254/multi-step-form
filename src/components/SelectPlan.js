import React from "react";
import { StyledContainer } from "./styles/Container.styles";
import { SideBar } from "./SideBar";
import Header from "./Header";
import Plan from "./Plan";
import {
  PlanDiv,
  FreqDiv,
  Monthly,
  Yearly,
  Label,
} from "./styles/StyledPlan.styles";
import { StyledNextStep, StyledGoBack } from "./styles/Button.styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFreq,
  changePlan,
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from "../store";

const SelectPlan = () => {
  const dispatch = useDispatch();
  const { freq, planName } = useSelector((state) => {
    return {
      freq: state.plan.freq,
      planName: state.plan.plan,
    };
  });

  const selectYourInfo = () => {
    dispatch(styleYourInfo(true));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };
  const selectAddOns = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(true));
    dispatch(styleSummary(false));
  };

  const handleFreqChange = (event) => {
    dispatch(changeFreq(event.target.checked));
  };
  const handlePlanSelect = (plan) => {
    dispatch(changePlan(plan));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    // Doing the same which was done by ternary operator
    // This is working then why the ternary operator was not working?
    if (planName) {
      selectAddOns();
    } else {
      alert("Please select a prefered plan");
    }
  };

  return (
    <StyledContainer>
      <SideBar />
      <main>
        <Header
          heading="Select your plan"
          text="You have the option of monthly and yearly billing."
        />
        <form onSubmit={handleSubmit}>
          <PlanDiv>
            <Plan
              img="./images/icon-arcade.svg"
              plan="Arcade"
              price={freq ? "$90/yr" : "$9/mo"}
              toShow={freq}
              handleSelect={handlePlanSelect}
              name={planName}
            />
            <Plan
              img="./images/icon-advanced.svg"
              plan="Advanced"
              price={freq ? "$120/yr" : "$12/mo"}
              toShow={freq}
              handleSelect={handlePlanSelect}
              name={planName}
            />
            <Plan
              img="./images/icon-pro.svg"
              plan="Pro"
              price={freq ? "$150/yr" : "$15/mo"}
              toShow={freq}
              handleSelect={handlePlanSelect}
              name={planName}
            />
          </PlanDiv>
          <FreqDiv>
            <Monthly>Monthly</Monthly>
            <Label>
              <input
                type="checkbox"
                name="planFreq"
                value={freq}
                defaultChecked={freq ? true : false}
                onChange={handleFreqChange}
              />
              <span />
            </Label>
            <Yearly>Yearly</Yearly>
          </FreqDiv>
          {/* <Link to={planName ? '/AddOns' : '/SelectPlan'} onClick={planName ? selectAddOns : alert('Please select a prefered plan')}><StyledNextStep>Next Step</StyledNextStep></Link> */}
          {/* Above code is causing the error. On reloading only the alert is being displayed!! */}

          <Link to={planName ? "/AddOns" : "/SelectPlan"} onClick={handleClick}>
            <StyledNextStep>Next Step</StyledNextStep>
          </Link>
        </form>
        <Link to="/">
          <StyledGoBack onClick={selectYourInfo}>Go Back</StyledGoBack>
        </Link>
      </main>
    </StyledContainer>
  );
};

export default SelectPlan;
