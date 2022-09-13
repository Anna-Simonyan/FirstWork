import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { NavLink, Outlet } from "react-router-dom";
import Links from "../Links";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const SideBar = () => {
  const [isOpen, setOpen] = useState(true);
  
  const click = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };


  return (
    <div>
    <div className={isOpen ? styles.sideBar : styles.open}>
   
      <button className={styles.but} onClick={click}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>

      <nav>
        <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )}  to="/home">
         
          {" "}

            <DashboardIcon  sx={{color:'white',marginTop: '30px', marginLeft: '130px'}}/>
           
        </NavLink>
        <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )}  to="/about">
        
          {" "}
            <AccountBoxIcon sx={{color:'white',marginTop: '30px', marginLeft: '130px'}} />
        </NavLink>
        <Links />
      </nav>
    </div>
    <Outlet/>
    </div>
  );
};

export default SideBar;
