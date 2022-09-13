import React, { useState } from "react";
import Button from "../../../../components/Button";
import styles from "./LoginCodeForm.module.css";
import { useForm } from "react-hook-form";
import { inputs } from "./data";
import CodeMask from "./codeMask";
import png2 from "../../../../assets/Images/2.png";
import { useSelector, useDispatch } from "react-redux";
import { postDataCode } from "../../../../Store/slices/loginCodeSlise";
import TokenService from "../../../../Services /TokenService";
import pngx from "../../../../assets/Images/x.png";
import { getToken } from "../../../../Store/slices/auth";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const LoginCodeForm = () => {
 
  const [error, setError] = useState(false);
  const user = useSelector((state) => state);
  const dispatch = useDispatch();


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  
  const [input, setInput] = useState(inputs);
  const [clicked, setClicked] = useState(false);

  const handleClick = (data) => {
   
    setClicked(true);
    if (Object.keys(errors).length) return;
    dispatch(postDataCode({
      email:user?.login?.user?.email?.email,
      code:`${data.input1}${data.input2}${data.input3}${data.input4}${data.input5}${data.input6}`,
  
  })).then((res) => {
   
      if (res.type === "type/loginWithCode/fulfilled") {
     
      NotificationManager.success('Success message', 'Request Succeeded', 100);
      
        setTimeout(() => {
          reset();
        TokenService.setLocalAccessToken(res.payload.jwt.token)
       
        dispatch(getToken(res.payload.jwt.token))
        
        }, 500);
        
      }

      if (res.type === "type/loginWithCode/rejected") {
        
        NotificationManager.error('Error message', 'Request UnSuccessfull!', 1000);
        setError(true);
        setInput(inputs);

        setTimeout(() => {
          setError(false);

          reset();
        }, 1000);
        
      }
    });
  };

  const changeActiv = (name) => {
    const res = input.map((e) =>
      e.name === name ? { ...e, active: true } : e
    );
    setInput(res);
  };
  const removeActiv = (el) => {
    const res = input.map((e) => (e.name === el ? { ...e, active: false } : e));
  
    setInput(res);
   
  };

  const closeClick = () => {
  
    reset();
    setInput(inputs);
  };
  
  return (
    
    <div className={styles.container}>
     
      <form
        className={styles.loginCodeForm}
        onSubmit={handleSubmit((data) => {
          handleClick(data);
        })}
      >
        <h2 className={styles.title}>Login</h2>
      
        {error === true? <div className={styles.divIcon}><img className={styles.png2} src={png2} alt="" /><span className={styles.input}>Please enter a valid code</span></div>:''}
        <p className={styles.text1}>
          To finalize your verification, please enter the code that has been
          sent to your email address / SMS
        </p>
        <div className={styles.inputsWrapper}>
          {input.map((e) => (
            <CodeMask
              setClicked={setClicked}
              clicked={clicked}
              key={e.id}
              input={e}
              register={register}
              errors={errors}
              changeActiv={changeActiv}
              removeActiv={removeActiv}
              error={error}
            />
          ))}
          <span onClick={closeClick} removeActiv={removeActiv} className={styles.closeButton}>
          <img className={styles.imgx} src={pngx} alt="" />
          </span>
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            className={styles.button}
            disabled={!isValid}
            text="SUBMIT"
            type="submit"
           
          />
        </div>

        <p className={styles.text2}>
          If you do not receive the confirmation message within a few minutes,
          please check your Spam or Bulk E-Mail folder
        </p>
      </form>
    
      <NotificationContainer/>
    </div>
    
  );
};
export default LoginCodeForm;



