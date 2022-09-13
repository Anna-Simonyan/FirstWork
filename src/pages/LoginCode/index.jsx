import React from "react";
import LoginCodeForm from "./components/LoginCodeForm";
import styles from "./LoginCode.module.css";

const LoginCode = () => {
  return (
    <div className={styles.container}>
    
      <LoginCodeForm />
    </div>
  );
};

export default LoginCode;
