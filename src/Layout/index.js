import React from "react";

import styles from "./Layout.module.css";
import {  Outlet } from "react-router-dom";
import playgroundPrimarySource from "../assets/Images/playground-primary.png";

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Playground</h1>
          <div className={styles.image}>
            <img src={playgroundPrimarySource} alt="Playground" />
          </div>
        </div>
      
      </div>
      <Outlet />
    </div>
    
    
    
   

  );
};

export default Layout;