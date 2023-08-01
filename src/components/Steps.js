import {StepNumber, StepName, Number} from "./styles/SideBar.styles"
import { Link } from "react-router-dom"

const Steps = () => {
    // const [on, setOn] = React.useState(props.on)
    
    // const styles = {
    //     backgroundColor: on ? "#222222" : "transparent"
    // }
    
    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }

    return (
        <ul>
            <Link to='/'> 
                <li>
                    <Number>1</Number>
                    <div>
                        <StepNumber>STEP 1</StepNumber>
                        <StepName>Your Info</StepName>
                    </div>
                </li>
            </Link>
            <Link to='/SelectPlan'>
                <li>
                    <Number>2</Number>
                    <div>
                        <StepNumber>STEP 2</StepNumber>
                        <StepName>Select Plan</StepName>
                    </div>
                </li>
            </Link>
            <Link to='/AddOns'>
                <li>
                    <Number>3</Number>
                    <div>
                        <StepNumber>STEP 3</StepNumber>
                        <StepName>Add-Ons</StepName>
                    </div>
                </li>
            </Link>
            <Link to='/Summary'>
                <li>
                    <Number>4</Number>
                    <div>
                        <StepNumber>STEP 4</StepNumber>
                        <StepName>Summary</StepName>
                    </div>
                </li>
            </Link>
        </ul>
    )
}

export default Steps

