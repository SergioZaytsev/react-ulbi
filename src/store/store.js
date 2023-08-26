import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slcie/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
