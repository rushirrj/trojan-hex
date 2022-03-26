import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import testReducer from "./testReducer";
// import logger from "redux-logger";

const store = configureStore({
  reducer: {
    test: testReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
