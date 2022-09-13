import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { generatePassword } from "../../Services /user";


export const postData = createAsyncThunk(
  "type/generatePassword",
  async function(data){
try{
  const response=await generatePassword(data)
  return response.data
}
catch(error){
  throw Error(error)
}
  }
);

const initialState = {
  user: {
    email: "",
  },
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.user.email = action.meta.arg;
      state.loading = false;
    });
    builder.addCase(postData.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default loginSlice.reducer;
