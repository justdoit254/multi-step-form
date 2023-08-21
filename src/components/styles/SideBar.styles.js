import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const SideImage = styled.div`
  position: relative;
  img {
    margin: 18px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    position: absolute;
    top: 75px;
    text-decoration: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    color: white;
    text-transform: uppercase;
  }
`;

export const Number = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 15px;
  border: 1px solid white;
  padding: 9px 13px;
  border-radius: 50%;
  font-weight: 500;
  text-decoration: none;
`;

export const StepNumber = styled.div`
  font-weight: 400;
  font-size: 0.7rem;
  color: chartreuse;
`;

export const StepName = styled.div`
  margin-top: 3px;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.09em;
`;
