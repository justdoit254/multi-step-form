import { styled } from "styled-components";

export const Label = styled.label`
    border: 1px solid gray;
    display: flex;
    align-items: center;
    padding: 18px;
    border-radius: 7px;
    margin-left: 75px;
    width: 475px;
    position: relative;
    margin-bottom: 20px;

    input {
        width: 18px;
        height: 18px;
        margin-right: 20px;
        background-color: #a5a0dd;
    }
`

export const LabelText = styled.div`
    h4,p {
        margin: 0;
    }

    p{
        font-size: 0.9rem;
        margin-top: 3px;
        color: gray;
    }
`

export const PriceTag = styled.div`
    color: #a5a0dd;
    position: absolute;
    font-size: 0.9rem;
    right: 30px;
    font-weight: 500;
`