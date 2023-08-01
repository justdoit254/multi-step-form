import React from "react";
import { StyledContainer } from "./styles/Container.styles";
import { SideBar } from "./SideBar";
import Header from "./Header";
import { Label, LabelText, PriceTag } from "./styles/AddOns.styles";
import { StyledNextStep, StyledGoBack } from "./styles/Button.styles";
import { Link } from "react-router-dom";


const AddOns = (props) => {
    
    React.useEffect(function() {
        console.log("Render Add");
      }, [props.yourInfo])
    return (
        <StyledContainer>
        <SideBar />
            <main>
                <Header 
                    heading="Pick add-ons"
                    text="Add-ons help enhance your gaming experience."
                />
                <Label>
                    <input type="checkbox" 
                        name="onlineServices" 
                        value={props.yourInfo.onlineServices}
                        onChange={props.handleChange}
                    />
                    <LabelText>
                        <h4>Online Services</h4>
                        <p>Access to multiplayer games</p>
                    </LabelText>
                    <PriceTag>+$10/yr</PriceTag>
                </Label>
                <Label>
                    <input type="checkbox" 
                        name="largerStorage" 
                        value={props.yourInfo.largerStorage}
                        onChange={props.handleChange}
                    />
                    <LabelText>
                        <h4>Larger storage</h4>
                        <p>Extra 1TB of cloud save</p>
                    </LabelText>
                    <PriceTag>+$20/yr</PriceTag>
                </Label>
                <Label>
                    <input type="checkbox" 
                        name="customizableProfile" 
                        value={props.yourInfo.customizableProfile}
                        onChange={props.handleChange}
                    />
                    <LabelText>
                        <h4>Customizable profile</h4>
                        <p>Custom theme on your profile</p>
                    </LabelText>
                    <PriceTag>+$20/yr</PriceTag>
                </Label>
                <Link to='/SelectPlan'><StyledGoBack>Go Back</StyledGoBack></Link>
                <Link to='/Summary'><StyledNextStep>Next Step</StyledNextStep></Link>
            </main>
    </StyledContainer>
    )
}

export default AddOns