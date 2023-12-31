import { configureStore } from "@reduxjs/toolkit";
import { AccountSlice } from "./features/accountSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    account: AccountSlice.reducer,
  },
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export default store;
