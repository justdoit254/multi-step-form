import { configureStore } from "@reduxjs/toolkit";
import {
  changeName,
  changeEmail,
  changePhone,
  changeIsInfoValid,
  infoReducer,
} from "./InfoSlice";
import { changeFreq, changePlan, planReduer } from "./PlanSlice";
import {
  changeOnlineServices,
  changelargeStorage,
  changecustomizableProfile,
  addOnsReducer,
} from "./AddOnsSlice";
import {
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
  sideBarReducer,
} from "./SideBarSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    info: infoReducer,
    plan: planReduer,
    addOns: addOnsReducer,
  },
});

export {
  store,
  styleYourInfo,
  styleSelectPlan,
  styleAddOns,
  styleSummary,
  sideBarReducer,
  changeName,
  changeEmail,
  changePhone,
  changeIsInfoValid,
  infoReducer,
  changeFreq,
  changePlan,
  planReduer,
  changeOnlineServices,
  changelargeStorage,
  changecustomizableProfile,
  addOnsReducer,
};
