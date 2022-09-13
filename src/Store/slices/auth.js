import { createSlice } from "@reduxjs/toolkit";
import TokenService from "../../Services /TokenService";

const initialState = {
    token: TokenService.getLocalAccessToken()
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getToken: (state, action) => {
            state.token = action.payload;
        }
    }
  });

  export const { getToken } = authSlice.actions
  export default authSlice.reducer;