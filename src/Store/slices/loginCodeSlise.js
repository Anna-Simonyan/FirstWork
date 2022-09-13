import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import TokenService from "../../Services /TokenService";
import { loginWithCode } from "../../Services /user";

export const postDataCode= createAsyncThunk(
  "type/loginWithCode",
  async function(data){
try{
  const response = await loginWithCode(data)
  
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
    code: "",
    languageID: "",
  },
};

const loginCodeSlice = createSlice({
  name: "loginCodeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postDataCode.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postDataCode.fulfilled, (state, action) => {
      state.loading = false;
      TokenService.setLocalAccessToken(action.payload.jwt.token);
      TokenService.setLocalRefreshToken(action.payload.jwt.refreshToken);
      TokenService.getLocalAccessToken(action.payload.jwt.token)
     
    });
    builder.addCase(postDataCode.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    
    });
  },
});


export default loginCodeSlice.reducer;
