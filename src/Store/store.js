import { configureStore } from "@reduxjs/toolkit";
import  timePikerReduser from "../Store/slices/timePiker"
import loginReduser from "../Store/slices/loginSlise"
import authReducer from "../Store/slices/auth"
import loginCodeReduser from "../Store/slices/loginCodeSlise"
import homeReduser from "../Store/slices/homeSlise"
import aboutReduser from "../Store/slices/aboutSlise"
const store = configureStore ({
    reducer:{
        login:loginReduser,
        loginCode:loginCodeReduser,
        logout:homeReduser,
        getCurrentAppUser:aboutReduser,
        auth: authReducer,
        tasks: timePikerReduser,
    }
})

export default store