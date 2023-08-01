import { styled } from "styled-components";

export const PlanDiv = styled.div`
    display: flex;
    margin-left: 60px;
`

export const StyledPlan = styled.button`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 9px;
    width: 136px;
    margin: 0 15px;
    cursor: pointer;
    &:hover,
    &:focus {
        border: 1.5px solid #16166d;
    }
    &:active {
        background-color: #16166d;
        border: 1.5px solid #16166d;
    }

    h3 {
        margin: 10px 0 0 15px;
    }

    p {
        margin: 5px 15px;
    }
`

export const PlanImg = styled.img`
    width: 36px;
    height: 36px;
    margin: 20px 15px;
`

export const Free = styled.div`
    margin-left: 15px;
    margin-bottom: 20px;
    /* margin-top: 5px; */
    font-size: 0.8rem;
    color: gray;
`

export const FreqDiv = styled.div`
    display: flex;
    margin: 30px 0 0 75px;
    background-color: #e2dede63;
    font-weight: 500;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    max-width: 470px;
`

export const Monthly = styled.p`
    margin-right: 15px;
`
export const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    margin: 12px;

    input {
        display: none;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #16166d;
        transition: 0.3s;
        border-radius: 30px;
    }

    span:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3.5px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.3s;
    }

    input:checked + span {
        background-color: #00c853;
    }

    input:checked + span:before {
        transform: translateX(25px);
    }
`

export const Yearly = styled.p`
    margin-left: 15px;
`

