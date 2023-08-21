import React from "react";
import { StyledContainer } from "./styles/Container.styles";
import { SideBar } from "./SideBar";
import Header from "./Header";
import { Label, LabelText, PriceTag } from "./styles/AddOns.styles";
import { StyledNextStep, StyledGoBack } from "./styles/Button.styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOnlineServices,
  changelargeStorage,
  changecustomizableProfile,
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from "../store";

const AddOns = () => {
  const dispatch = useDispatch();
  const { onlineServices, largerStorage, customizableProfile, freq } =
    useSelector((state) => {
      return {
        onlineServices: state.addOns.onlineServices,
        largerStorage: state.addOns.largerStorage,
        customizableProfile: state.addOns.customizableProfile,
        freq: state.plan.freq,
      };
    });

  const selectSelectPlan = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(true));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };
  const selectSummary = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(true));
  };

  const handleServicesChange = (event) => {
    dispatch(changeOnlineServices(event.target.checked));
  };
  const handleStorageChange = (event) => {
    dispatch(changelargeStorage(event.target.checked));
  };
  const handleProfileChange = (event) => {
    dispatch(changecustomizableProfile(event.target.checked));
  };

  return (
    <StyledContainer>
      <SideBar />
      <main>
        <Header
          heading="Pick add-ons"
          text="Add-ons help enhance your gaming experience."
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <Label ischecked={onlineServices.toString()}>
            <input
              type="checkbox"
              name="onlineServices"
              value={onlineServices}
              defaultChecked={onlineServices ? true : false}
              onChange={handleServicesChange}
            />
            <LabelText>
              <h4>Online Services</h4>
              <p>Access to multiplayer games</p>
            </LabelText>
            <PriceTag>
              +$1{freq ? 0 : ""}/{freq ? "yr" : "mo"}
            </PriceTag>
          </Label>
          <Label ischecked={largerStorage.toString()}>
            <input
              type="checkbox"
              name="largerStorage"
              value={largerStorage}
              defaultChecked={largerStorage ? true : false}
              onChange={handleStorageChange}
            />
            <LabelText>
              <h4>Larger storage</h4>
              <p>Extra 1TB of cloud save</p>
            </LabelText>
            <PriceTag>
              +$2{freq ? 0 : ""}/{freq ? "yr" : "mo"}
            </PriceTag>
          </Label>
          <Label ischecked={customizableProfile.toString()}>
            <input
              type="checkbox"
              name="customizableProfile"
              value={customizableProfile}
              defaultChecked={customizableProfile ? true : false}
              onChange={handleProfileChange}
            />
            <LabelText>
              <h4>Customizable profile</h4>
              <p>Custom theme on your profile</p>
            </LabelText>
            <PriceTag>
              +$2{freq ? 0 : ""}/{freq ? "yr" : "mo"}
            </PriceTag>
          </Label>
          <Link to="/Summary">
            <StyledNextStep onClick={selectSummary}>Next Step</StyledNextStep>
          </Link>
        </form>
        <Link to="/SelectPlan">
          <StyledGoBack onClick={selectSelectPlan}>Go Back</StyledGoBack>
        </Link>
      </main>
    </StyledContainer>
  );
};

export default AddOns;
