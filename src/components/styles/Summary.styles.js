import { styled } from "styled-components";

export const StyledSummary = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #e2dede63;
    /* border: 0.1px solid gray; */
    border-radius: 7px;
    margin: 15px 75px;
    width: 475px;
    padding: 5px;
     hr {
        border-top: 10px solid red;
     }
`

export const StyledPlan = styled.div`
    display: flex;
    font-weight: 700;
    margin: 0px 10px;
    justify-content: space-between;
`
export const StyledAddOns = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;
    font-weight: 400;
    font-size: 0.9rem;
    /* border-top: 0.1px solid gray; */
    p:first-child {
        color: gray;
    }
`
export const StyledTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: -10px 85px;
    font-weight: 400;
    font-size: 0.9rem;
    width: 450px;
    /* border-top: 0.1px solid gray; */
    p:first-child {
        color: gray;
    }
    p:last-child {
        font-weight: 700;
        font-size: 1.2rem;
        color: #16166d;
    }
`

export const StyledHr = styled.hr`
    color: rgba(0, 0, 0, 0.65);
  margin-left: -100px;
`