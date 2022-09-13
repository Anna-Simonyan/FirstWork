import React, { useState } from "react";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormSchema } from "../../../../hooks/useFormSchema";
import { yupSchema } from "./constants";
import { FormTextField } from "../../../../components/FormTextField";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { postData } from "../../../../Store/slices/loginSlise";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    formState: { isValid },
    control,
    reset,
  } = useFormSchema(yupSchema);
 
  const onSubmit = (e) => {
    
    e.preventDefault();
    dispatch(postData({email:email})).then((res) => {
      console.log(res)
      if (res.type === "type/generatePassword/fulfilled") {
    
      NotificationManager.success('Success message', 'Request Succeeded',100);
  
        setTimeout(() => {
          navigate("/loginCode");
        }, 500); 
        
      } 
      
      if(res.type === 'type/generatePassword/rejected') { 

        NotificationManager.error('Error message', 'Request UnSuccessfull!', 1000);
        
        setTimeout(() => {
          reset()
        }, 1000)
        
      }
    });
  };

  

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
      
        <h2 className={styles.title}>Login</h2>
        
        <FormTextField
          control={control}
          name="email"
          value={email}
          placeholder="Enter your email"
          type="email"
          label="Enter your email"
          variant="standard"
          setEmail={setEmail}
        />

        <div className={styles.buttonWrapper}>
          <Button
            disabled={!isValid}
            className={styles.button}
            text="SEND CODE"
            type="submit"
          />
        </div>
      </form>
      
      <NotificationContainer/>
    </div>
  );
};

export default LoginForm;
