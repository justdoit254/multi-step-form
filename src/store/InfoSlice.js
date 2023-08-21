import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    name: "",
    email: "",
    phone: "",
    isInfoValid: false,
  },
  reducers: {
    changeName(state, action) {
      // Payload will bring the name as parameter
      state.name = action.payload;
    },
    changeEmail(state, action) {
      // Payload will bring the email as parameter
      state.email = action.payload;
    },
    changePhone(state, action) {
      // Payload will bring the phone as parameter
      state.phone = action.payload;
    },
    changeIsInfoValid(state, action) {
      state.isInfoValid = action.payload;
    },
  },
});

export const { changeName, changeEmail, changePhone, changeIsInfoValid } =
  infoSlice.actions;
export const infoReducer = infoSlice.reducer;
