import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,    //initially the state is null bcz in initial stage we have no user
  reducers: {
    addUser: (state, action) => {
      return action.payload;   //whatever we return from here will go into the state, whatever the data this action get this go to the user slice
    },
    removeUser: (state, action) => {
      return null;   //if we pass null my data get remove from the userSlice
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
