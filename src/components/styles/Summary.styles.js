import { styled } from "styled-components";

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #e2dede63;
  border-radius: 7px;
  margin: 15px 75px;
  width: 475px;
  padding: 5px;
  padding-bottom: 15px;
  hr {
    width: -webkit-fill-available;
    margin-top: 15px;
  }
`;

export const StyledPlan = styled.div`
  display: flex;
  font-weight: 700;
  margin: 0px 10px;
  justify-content: space-between;
`;
export const StyledAddOns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 10px;
  font-weight: 400;
  font-size: 0.9rem;
  p:first-child {
    color: gray;
  }
  p {
    margin-bottom: 0;
  }
`;
export const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -10px 85px;
  font-weight: 400;
  font-size: 0.9rem;
  width: 450px;
  p:first-child {
    color: gray;
  }
  p:last-child {
    font-weight: 700;
    font-size: 1.2rem;
    color: #16166d;
  }
`;

export const StyledHr = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  margin-left: -100px;
`;

export const StyledEnd = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  justify-content: center;
  margin: auto;
  align-items: center;

  img {
    width: 81px;
    height: 81px;
  }

  h2 {
    color: #16166d;
    font-size: 2em;
    margin-bottom: 15px;
  }

  p {
    color: darkgray;
    margin-top: 0;
    text-align: center;
  }
`;
