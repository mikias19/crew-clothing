//import { applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootreducer";
import logger from "redux-logger";

//const middlewaresEnhancer = applyMiddleware(logger);

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV !== "production",
  // serializableCheck: false,
  middleware: getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
