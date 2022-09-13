import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentAppUser } from "../../Services /user";

export const getUsers= createAsyncThunk(
  "type/getCurrentAppUser",
  async function(data){
try{
  const response = await getCurrentAppUser(data)
  
  return response.data
}
catch(error){
  throw Error(error)
}
  }
);

const initialState = {
  user: {}
};

const aboutSlise = createSlice({
  name: "aboutSlise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.user = action.payload 
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default aboutSlise.reducer;