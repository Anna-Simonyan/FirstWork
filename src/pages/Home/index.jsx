import React from "react";
import styles from "./Home.module.css";
import png3 from "../../assets/Images/3.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import TokenService from "../../Services /TokenService";
import { useDispatch } from "react-redux";
import { postDataLogout } from "../../Store/slices/homeSlise";
import { getUsers } from "../../Store/slices/aboutSlise";
import { getToken } from "../../Store/slices/auth";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const logout = () => {
    dispatch(postDataLogout()).then((res) => {
      console.log(res)
      if (res.type === "type/logout/fulfilled") {
      
      NotificationManager.success('Success message', 'Request Succeeded',100);
      setTimeout(() => {
        TokenService.removeLocalAccessToken()
        TokenService.removeLocalRefreshToken()
        dispatch(getToken(null))
      }, 500);
       
      } 
      if(res.type === 'type/logout/rejected') {
        NotificationManager.error('Error message', 'Request UnSuccessfull!', 1000);
      
      }
    });
 
  };

  const MyProff = () =>{
   
dispatch(getUsers()).then((res)=>{
  console.log(res)
  if (res.type === "type/getCurrentAppUser/fulfilled") {
 
  NotificationManager.success('Success message', 'Request Succeeded',100);

  setTimeout(() => {
    navigate("/about");
  }, 500);
   
  } 

  if(res.type === 'type/lgetCurrentAppUser/rejected') {
       
    NotificationManager.error('Error message', 'Request UnSuccessfull!', 1000);
   
  }
})
  }
  return (
    <div className={styles.home}>
   
      <div className={styles.homeImag}>
        <div className={styles.png3}>
          <img src={png3} alt="" />
          <div className={styles.comDiv}>
            <p className={styles.homeP}>Coming soon</p>
            <Button
              className={styles.button}
              text="edit my profile and my worklog"
              onClick={MyProff}
            />
             <Button className={styles.but} text="LOGOUT" onClick={logout} />
          </div>
         
        </div>
      </div>
      <NotificationContainer/>
    </div>
  );
};

export default Home;
