import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExampleUser } from "../../assets/types/example";

const initialState = {
  user: null as IExampleUser | null,
  isAuth: false,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    logout: () => initialState,
    setUserName: (state, action: PayloadAction<IExampleUser>) => {
      state.user = action.payload;
      state.isAuth = !!action.payload.name;
    },
  },
});

export const { logout, setUserName } = exampleSlice.actions;

export default exampleSlice.reducer;
