import { StyledPlan, PlanImg, Free } from "./styles/Plan.styles";

const Plan = (props) => {
    return (
        <StyledPlan onClick={() => props.handleSelect(props.plan)}>
            <PlanImg src={props.img} alt="Arcade" />
            <h3>{props.plan}</h3>
            <p>{props.price}</p>
            {props.toShow && <Free>2 months free</Free>}
        </StyledPlan>
    )
}

export default Plan