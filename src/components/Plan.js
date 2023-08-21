import { StyledPlan, PlanImg, Free } from "./styles/StyledPlan.styles";

const Plan = (props) => {
  return (
    <StyledPlan
      onClick={() => props.handleSelect(props.plan)}
      style={{
        backgroundColor: props.name === props.plan ? "#F0F0F0" : "white",
      }}
    >
      <PlanImg src={props.img} alt="Arcade" />
      <h3>{props.plan}</h3>
      <p>{props.price}</p>
      {props.toShow && <Free>2 months free</Free>}
    </StyledPlan>
  );
};

export default Plan;
