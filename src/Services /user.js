
import AxiosInstance from "./axios";

export const generatePassword =  (email) => {
  return AxiosInstance.post("/Accounts/GeneratePassword",email)
};

export const loginWithCode =  (emailCode) => {
return AxiosInstance.post("/Accounts/LoginWithCode",emailCode)
};


export const logout = (logout) =>{
  return AxiosInstance.post("/Accounts/Logout",logout)
}


export const getCurrentAppUser = (currentAppUser)=>{
  return AxiosInstance.get("/Accounts/GetCurrentAppUser",currentAppUser)
}