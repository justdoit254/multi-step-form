import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    freq: false,
    plan: "",
  },
  reducers: {
    changeFreq(state, action) {
      // Payload will bring true/false as parameter
      // false === monthly ; true === yearly
      state.freq = action.payload;
    },
    changePlan(state, action) {
      // Payload will bring plan name as parameter
      state.plan = action.payload;
    },
  },
});

export const { changeFreq, changePlan } = planSlice.actions;
export const planReduer = planSlice.reducer;
