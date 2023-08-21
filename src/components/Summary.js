import React from "react";
import { StyledContainer } from "./styles/Container.styles";
import { SideBar } from "./SideBar";
import Header from "./Header";
import {
  StyledGoBack,
  StyledChange,
  StyledConfirm,
} from "./styles/Button.styles";
import {
  StyledAddOns,
  StyledPlan,
  StyledSummary,
  StyledTotal,
  StyledEnd,
} from "./styles/Summary.styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from "../store";

const Summary = () => {
  const dispatch = useDispatch();
  const { planName, freq, onlineServices, largerStorage, customizableProfile } =
    useSelector((state) => {
      // the second plan is the name of the plan
      return {
        planName: state.plan.plan,
        freq: state.plan.freq,
        onlineServices: state.addOns.onlineServices,
        largerStorage: state.addOns.largerStorage,
        customizableProfile: state.addOns.customizableProfile,
      };
    });

  const selectSelectPlan = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(true));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };
  const selectAddOns = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(true));
    dispatch(styleSummary(false));
  };

  let price = 0;
  if (planName === "Arcade") {
    price = 9;
  } else if (planName === "Advanced") {
    price = 12;
  } else {
    price = 15;
  }

  let cost = price;
  if (onlineServices) {
    cost += 1;
  }
  if (largerStorage) {
    cost += 2;
  }
  if (customizableProfile) {
    cost += 2;
  }

  const [isConfirm, setIsConfirm] = React.useState(false);
  const handleConfirm = () => {
    setIsConfirm(true);
  };

  return (
    <StyledContainer>
      <SideBar />
      {isConfirm ? (
        <StyledEnd>
          <img src="./images/icon-thank-you.svg" alt="thank-you" />
          <h2>Thank you!</h2>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, feel free to email us at
            support@loregaming.com
          </p>
        </StyledEnd>
      ) : (
        <main>
          <Header
            heading="Finishing up"
            text="Double check everything looks OK before confirming."
          />
          <StyledSummary>
            <StyledPlan>
              <p>
                {planName} ({freq ? "Yearly" : "Monthly"})
              </p>
              <p>
                ${price}
                {freq ? 0 : ""}/{freq ? "yr" : "mo"}
              </p>
            </StyledPlan>
            <Link to="/SelectPlan">
              <StyledChange onClick={selectSelectPlan}>Change</StyledChange>
            </Link>
            <hr />
            {onlineServices && (
              <StyledAddOns>
                <p>Online service</p>
                <p>
                  +$1{freq ? 0 : ""}/{freq ? "yr" : "mo"}
                </p>
              </StyledAddOns>
            )}
            {largerStorage && (
              <StyledAddOns>
                <p>Large storage</p>
                <p>
                  +$2{freq ? 0 : ""}/{freq ? "yr" : "mo"}
                </p>
              </StyledAddOns>
            )}
            {customizableProfile && (
              <StyledAddOns>
                <p>Customizable profile</p>
                <p>
                  +$2{freq ? 0 : ""}/{freq ? "yr" : "mo"}
                </p>
              </StyledAddOns>
            )}
          </StyledSummary>
          <StyledTotal>
            <p>Total (per {freq ? "year" : "month"})</p>
            <p>
              +${cost}
              {freq ? 0 : ""}/{freq ? "yr" : "mo"}
            </p>
          </StyledTotal>
          <Link to="/AddOns">
            <StyledGoBack onClick={selectAddOns}>Go Back</StyledGoBack>
          </Link>
          <Link to="/Summary">
            <StyledConfirm onClick={handleConfirm}>Confirm</StyledConfirm>
          </Link>
        </main>
      )}
    </StyledContainer>
  );
};

export default Summary;
