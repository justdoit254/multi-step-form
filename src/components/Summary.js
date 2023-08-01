import React from "react";
import { StyledContainer } from "./styles/Container.styles";
import { SideBar } from "./SideBar";
import Header from "./Header";
import { StyledGoBack, StyledChange, StyledConfirm } from "./styles/Button.styles";
import { StyledAddOns, StyledPlan, StyledSummary, StyledTotal } from "./styles/Summary.styles";
import { Link } from "react-router-dom";


const Summary = (props) => {

    React.useEffect(function() {
        console.log("Render Summary");
      }, [props.yourInfo])
    return (
        <StyledContainer>
        <SideBar />
            <main>
                <Header 
                    heading="Finishing up"
                    text="Double check everything looks OK before confirming."
                />
                <StyledSummary>
                    <StyledPlan>
                        <p>{props.planName} (Monthly)</p>
                        <p>$9/mo</p>
                    </StyledPlan>
                    <Link to='/SelectPlan'><StyledChange>Change</StyledChange></Link>
                    {/* <StyledHr /> */}
                    <StyledAddOns>
                        <p>Online Service</p>
                        <p>+$1/mo</p>
                    </StyledAddOns>
                </StyledSummary>
                <StyledTotal>
                    <p>Total (per month)</p>
                    <p>+$10/mo</p>
                </StyledTotal>
                <Link to='/AddOns'><StyledGoBack>Go Back</StyledGoBack></Link>
                <Link to='/Summary'><StyledConfirm>Confirm</StyledConfirm></Link>
            </main>
    </StyledContainer>
    )
}

export default Summary