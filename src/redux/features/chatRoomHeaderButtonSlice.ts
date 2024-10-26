import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  selectedButton:
    | "avatar"
    | "image"
    | "clip"
    | "notice"
    | "alarm"
    | "dotMenu"
    | null;
}

const initialState: LayoutState = {
  selectedButton: null,
};

const layoutSlice = createSlice({
  name: "headerButtons",
  initialState,
  reducers: {
    selectButton(state, action: PayloadAction<LayoutState["selectedButton"]>) {
      state.selectedButton = action.payload;
    },
  },
});

export const { selectButton } = layoutSlice.actions;
export default layoutSlice.reducer;
