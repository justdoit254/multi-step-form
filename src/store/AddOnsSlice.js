import { createSlice } from "@reduxjs/toolkit";

const addOnsSlice = createSlice({
  name: "addOns",
  initialState: {
    onlineServices: false,
    largerStorage: false,
    customizableProfile: false,
  },
  reducers: {
    changeOnlineServices(state, action) {
      // Payload will bring true/false as parameter
      // false === unselected ; true === selected
      state.onlineServices = action.payload;

      // Below code for trying to get it done with one function
      // const name = action.payload.name
      // state.name = action.payload.value
    },
    changelargeStorage(state, action) {
      // Payload will bring true/false as parameter
      // false === unselected ; true === selected
      state.largerStorage = action.payload;
    },
    changecustomizableProfile(state, action) {
      // Payload will bring true/false as parameter
      // false === unselected ; true === selected
      state.customizableProfile = action.payload;
    },
  },
});

export const {
  changeOnlineServices,
  changelargeStorage,
  changecustomizableProfile,
} = addOnsSlice.actions;
export const addOnsReducer = addOnsSlice.reducer;
