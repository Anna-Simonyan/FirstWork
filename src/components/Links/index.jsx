import React from "react";
import { NavLink } from "react-router-dom"

const Links =()=> {
   
    return (
      <nav  style={{display:'flex',flexDirection:'column'}}>
        <NavLink   className={({ isActive }) => (isActive ? "link-active" : "link")}  exact='true' to = '/'> Login </NavLink>
        <NavLink   className={({ isActive }) => (isActive ? "link-active" : "link")} exact='true' to = '/loginCode'> LoginCode </NavLink>
          <NavLink   className={({ isActive }) => (isActive ? "link-active" : "link")} exact='true'  to = '/home'> Home </NavLink>
          <NavLink   className={({ isActive }) => (isActive ? "link-active" : "link")} exact ='true' to = '/about'> My Profile </NavLink>
      </nav>
    );
  }
  
  export default Links ;