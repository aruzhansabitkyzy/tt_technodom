import { configureStore } from "@reduxjs/toolkit";
import { AccountSlice } from "./features/accountSlice";
import errorSlice, { ErrorSlice } from "./features/errorSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    account: AccountSlice.reducer,
    error: ErrorSlice.reducer,
  },
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export default store;
