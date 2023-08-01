import React from "react";
import { StyledContainer } from "./styles/Container.styles";
import { SideBar } from "./SideBar";
import Header from "./Header";
import Plan from "./Plan";
import { PlanDiv, FreqDiv, Monthly, Yearly, Label } from "./styles/Plan.styles";
import { StyledNextStep, StyledGoBack } from "./styles/Button.styles";
import { Link } from "react-router-dom";
import { StyledPlan, PlanImg, Free } from "./styles/Plan.styles";

const SelectPlan = (props) => {
    React.useEffect(function() {
        console.log("Render Plan");
      }, [props.yourInfo])

    return (
        <StyledContainer>
            <SideBar />
                <main>
                    <Header 
                        heading="Select your plan"
                        text="You have the option of monthly and yearly billing."
                    />
                    <PlanDiv>
                        <Plan 
                            img = "./images/icon-arcade.svg"
                            plan = "Arcade"
                            price = "$90/yr"
                            toShow = {props.yourInfo.planFreq}
                            handleSelect = {props.handleSelect}
                        />
                        <Plan 
                            img = "./images/icon-advanced.svg"
                            plan = "Advanced"
                            price = "$120/yr"
                            toShow = {props.yourInfo.planFreq}
                            handleSelect = {props.handleSelect}
                        />
                        <Plan 
                            img = "./images/icon-pro.svg"
                            plan = "Pro"
                            price = "$150/yr"
                            toShow = {props.yourInfo.planFreq}
                            handleSelect = {props.handleSelect}
                        />
                    </PlanDiv>
                    <FreqDiv>
                        <Monthly>Monthly</Monthly>
                        <Label>
                            <input 
                                type="checkbox" 
                                name="planFreq"
                                value={props.yourInfo.planFreq}
                                onChange={props.handleChange}
                            />
                            <span />
                            {/* <strong>{label}</strong> */}
                        </Label>
                        <Yearly>Yearly</Yearly>
                    </FreqDiv>
                    <Link to='/'><StyledGoBack>Go Back</StyledGoBack></Link>
                    <Link to='/AddOns'><StyledNextStep>Next Step</StyledNextStep></Link>
                </main>
        </StyledContainer>
    )
}

export default SelectPlan