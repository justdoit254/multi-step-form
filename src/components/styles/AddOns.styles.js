import { styled } from "styled-components";

export const Label = styled.label`
  border: ${(props) => (props.ischecked === "true" ? "1.5px" : "1px")} solid
    ${(props) => (props.ischecked === "true" ? "#16166d" : "gray")};
  display: flex;
  align-items: center;
  padding: 18px;
  border-radius: 7px;
  margin-left: 75px;
  width: 475px;
  position: relative;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    border: 1.5px solid #16166d;
  }
  background-color: ${(props) =>
    props.ischecked === "true" ? "#F0F0F0" : "white"};

  input {
    width: 18px;
    height: 18px;
    margin-right: 20px;
    background-color: #a5a0dd;
  }
`;

export const LabelText = styled.div`
  h4,
  p {
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    margin-top: 3px;
    color: gray;
  }
`;

export const PriceTag = styled.div`
  color: #a5a0dd;
  position: absolute;
  font-size: 0.9rem;
  right: 30px;
  font-weight: 500;
`;
