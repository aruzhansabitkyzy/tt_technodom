import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Error {
  inputField: string;
  errorDescription: string;
}
export interface ErrorState {
  errors: Error[];
}

const initialState:ErrorState = {
  errors: []
}

export const ErrorSlice = createSlice({
    name:"error",
    initialState,
    reducers : {
        addError: (state, action:PayloadAction<{inputField: string, errorDescription: string}>)  => {
           state.errors.push({
            inputField: action.payload.inputField,
            errorDescription: action.payload.errorDescription
           })
        }
    }
})
export default ErrorSlice.reducer;
export const { addError } = ErrorSlice.actions;