import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: {
      Sunday: [{ id: 1 }],
      Monday: [{ id: 2 }, { id: 3 }],
      Tuesday: [{ id: 4 }, { id: 5 }],
      Wednesday: [{ id: 6 }, { id: 7 }],
      Thursday: [{ id: 8 }, { id: 9 }],
      Friday: [{ id: 10 }],
    },
  };
export const timePikerSlice= createSlice({
    name: "tasks",
    initialState,
    reducers:{
        
        addTask: (state, { payload }) => {
            state.data[payload].push({ id: Math.random() });
          },
          deleteTask:(state,{payload}) =>{
            state.data[payload.weekday] = state.data[payload.weekday].filter((item)=>item.id !== payload.time.id)
          }
    }
});

export const {addTask, deleteTask} = timePikerSlice.actions;

export default timePikerSlice.reducer;



