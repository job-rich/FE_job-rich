import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isMaximize: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.isMaximize = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    maximizeModal: (state) => {
      state.isMaximize = true;
    },
    minimizeModal: (state) => {
      state.isMaximize = false;
    },
    maximinToggleModal: (state) => {
      state.isMaximize = !state.isMaximize;
    },
  },
});

export const {
  openModal,
  closeModal,
  toggleModal,
  maximizeModal,
  maximinToggleModal,
} = searchSlice.actions;

export default searchSlice.reducer;
