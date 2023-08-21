import { SideImage } from "./styles/SideBar.styles";
import Steps from "./Steps";

export const SideBar = () => (
  <>
    <SideImage>
      <img src="./images/bg-sidebar-desktop.svg" alt="Design" />
      <Steps />

      {/* This can also be one way to do this */}
      {/* <Steps 
                number = {1}
                name = "Your Info"
            />
            <Steps 
                number = {2}
                name = "Select Plan"
            />
            <Steps 
                number = {3}
                name = "Add-Ons"
            />
            <Steps 
                number = {4}
                name = "Summary"
            /> */}
    </SideImage>
  </>
);
