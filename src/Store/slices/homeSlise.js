import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import TokenService from "../../Services /TokenService";
import { logout } from "../../Services /user";
export const postDataLogout= createAsyncThunk(
  "type/logout",
  async function(data){
try{
  const response = await logout(data)
  
  return response.data
}
catch(error){
  throw Error(error)
}
  }
);
const initialState = {
  user: {
    
  },
};

const homeSlise = createSlice({
  name: "homeSlise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postDataLogout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postDataLogout.fulfilled, (state, action) => {
      state.loading = false;
      TokenService.removeLocalRefreshToken();
      TokenService.removeLocalAccessToken();
    
    });
    builder.addCase(postDataLogout.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default homeSlise.reducer;