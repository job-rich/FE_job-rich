import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterInfo {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  consents: {
    all: boolean;
    terms: boolean;
    privacyPolicy: boolean;
  };
}

const initialState: RegisterInfo = {
  id: "",
  email: "",
  password: "",
  confirmPassword: "",
  consents: {
    all: false,
    terms: false,
    privacyPolicy: false,
  },
};

const registerUserSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegisterUserData: (state, action: PayloadAction<RegisterInfo>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setRegisterUserData } = registerUserSlice.actions;
export default registerUserSlice.reducer;
