import { StepNumber, StepName, Number, NavLink } from "./styles/SideBar.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
} from "../store";

const Steps = () => {
  const dispatch = useDispatch();
  const { yourInfo, selectPlan, addOns, summary, planName } = useSelector(
    (state) => {
      return {
        yourInfo: state.sideBar.yourInfo,
        selectPlan: state.sideBar.selectPlan,
        addOns: state.sideBar.addOns,
        summary: state.sideBar.summary,
        planName: state.plan.plan,
      };
    }
  );

  const styles = {
    color: "black",
    backgroundColor: "aqua",
    border: "0.1px solid aqua",
  };
  const normalStyle = {
    border: "1px solid white",
  };

  const selectYourInfo = () => {
    dispatch(styleYourInfo(true));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(false));
  };
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
  const selectSummary = () => {
    dispatch(styleYourInfo(false));
    dispatch(styleSelectPlan(false));
    dispatch(styleAddOns(false));
    dispatch(styleSummary(true));
  };

  const handleAddOnsClick = () => {
    // Doing the same which was done by ternary operator
    // This is working then why the ternary operator was not working?
    if (planName) {
      selectAddOns();
    } else {
      alert("Please select a prefered plan");
    }
  };

  return (
    <ul>
      <NavLink to="/">
        <li onClick={selectYourInfo}>
          <Number style={yourInfo ? styles : normalStyle}>1</Number>
          <div>
            <StepNumber>STEP 1</StepNumber>
            <StepName>Your Info</StepName>
          </div>
        </li>
      </NavLink>
      <NavLink to="/SelectPlan">
        <li onClick={selectSelectPlan}>
          <Number style={selectPlan ? styles : normalStyle}>2</Number>
          <div>
            <StepNumber>STEP 2</StepNumber>
            <StepName>Select Plan</StepName>
          </div>
        </li>
      </NavLink>
      <NavLink to={planName ? "/AddOns" : "/SelectPlan"}>
        <li onClick={handleAddOnsClick}>
          <Number style={addOns ? styles : normalStyle}>3</Number>
          <div>
            <StepNumber>STEP 3</StepNumber>
            <StepName>Add-Ons</StepName>
          </div>
        </li>
      </NavLink>
      <NavLink to="/Summary">
        <li onClick={selectSummary}>
          <Number style={summary ? styles : normalStyle}>4</Number>
          <div>
            <StepNumber>STEP 4</StepNumber>
            <StepName>Summary</StepName>
          </div>
        </li>
      </NavLink>
    </ul>
  );
};

export default Steps;
