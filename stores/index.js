import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mySlice from "./mySlice";

const store = configureStore({
  reducer: {
    mySlice,
  },
});

export default store;

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();
