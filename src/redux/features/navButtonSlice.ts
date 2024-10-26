import { createSlice } from "@reduxjs/toolkit";

interface NavButtonState {
  selectedType: "home" | "friends" | "thread" | "rooms";
}

const initialState = {
  selectedType: "home",
} as NavButtonState;

const navButtonSlice = createSlice({
  name: "navButton",
  initialState,
  reducers: {
    selectButton: (state, action) => {
      state.selectedType = action.payload;
    },
  },
});

export const { selectButton } = navButtonSlice.actions;

export default navButtonSlice.reducer;
