import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Person {
  id: number;
  phoneNumber: string;
  name: string;
  email: string;
  password: string;
}
export interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [
    {
      id: 1,
      phoneNumber: "+7 (677) 777 7777",
      name: "Aruzhan",
      email: "aru@mail.ru",
      password: "123456",
    },
  ],
};

export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addPerson: (
      state,
      action: PayloadAction<{
        phoneNumber: string;
        name: string;
        email: string;
        password: string;
      }>
    ) => {
      state.persons.push({
        id: state.persons.length,
        phoneNumber: action.payload.phoneNumber,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      });
      console.log(state.persons.length)
      console.log(state === initialState)
    },
  },
});

export default AccountSlice.reducer;
export const { addPerson } = AccountSlice.actions;
