import { StyledContainer } from "./styles/Container.styles";
import { SideBar } from "./SideBar";
import { Main } from "./styles/Main.styles";
import Header from "./Header";

const Container = () => (
  <StyledContainer>
    <SideBar />
    <Main>
      <Header
        heading="Personal info"
        text="Please provide your name, email address and phone number"
      />
      <div>Form will come here</div>
    </Main>
  </StyledContainer>
);

export default Container;
