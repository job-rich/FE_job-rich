import { configureStore } from "@reduxjs/toolkit";

import chatRoomHeaderButtonReducer from "./features/chatRoomHeaderButtonSlice";
import counterReducer from "./features/counterSlice";
import navButtonReducer from "./features/navButtonSlice";
import registerUserReducer from "./features/registerUserSlice";
import searchReducer from "./features/searchButtonSlice";

const store = configureStore({
  reducer: {
    counterReducer,
    navButtonReducer,
    chatRoomHeaderButtonReducer,
    registerUserReducer,
    searchReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { RootState, AppDispatch };
