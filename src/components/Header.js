import { StyledHeader } from "./styles/Header.styles";

const Header = ({ heading, text }) => (
  <StyledHeader>
    <h1>{heading}</h1>
    <p>{text}</p>
  </StyledHeader>
);

export default Header;
