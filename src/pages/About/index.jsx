import React,{ useEffect} from "react";
import styles from "./About.module.css";
import slack from "../../assets/Images/slack.svg";
import kiss from "../../assets/Images/kiss.png";
import { TextField } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch} from "react-redux";
import { getUsers } from "../../Store/slices/aboutSlise";
import { addTask } from "../../Store/slices/timePiker";
import TimePicker from "./components/TimePicker";
import InputAdornment from "@mui/material/InputAdornment";


const About = () => {
  const user = useSelector((state) => state.getCurrentAppUser.user);
 
  const dispatch = useDispatch();
  const data = useSelector((data) => data.tasks.data);
	

 
  const array = Object.keys(data);
  const addDataHours = (day) => {
    dispatch(addTask(day));
  }
  useEffect (() => {
    dispatch(getUsers())
  },[])

  return (
    
    <div className={styles.about}>
      
     
      <h1 className="h1"> My Profile </h1>
      <div className={styles.profDiv}>
        <div className={styles.prof}>
        <div><h2 className={styles.h1}>General Info</h2></div> 
        <div className={styles.titleDiv}><h2 className={styles.h}>My accounts</h2></div> 
        </div>
        <div className={styles.containerInput}>
          <div className={styles.containerInput1}>
            
            <div className={styles.inputLine}>
              <div className={styles.tex}>
               
                <TextField
                  id="filled-basic"
                  label="First name"
                  variant="filled"
                  value={user.firstName || ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                 
                
                /> 
                
              </div>

              <div className={styles.tex}>
                <TextField
                  id="filled-basic"
                  label="Last name"
                  variant="filled"
                  value={user.lastName || ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{marginLeft:'20px',   }}
                />
              </div>

              <div>
              <TextField
 variant="filled"
        id="date"
        label="Date of birth"
        type="date"
       value={user.dateOfBirth || ''}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{marginLeft:'20px', }}
      />
             
              </div>
            </div>
            
            <div className={styles.inputLine}>
          
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={user.email || ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  sx={{ marginTop: "10px",opacity:0.7 }}
                />
              

              <TextField
                id="filled-basic"
                label="Personal Email"
                variant="filled"
                value={user.personalEmail || ''}
                InputLabelProps={{
                  shrink: true,
                }}
                
                sx={{ marginLeft:'120px', marginTop: "10px" }}
              />

              <TextField
                id="filled-basic"
                label="Mobile Phone"
                variant="filled"
                value={user.mobilePhone || ''}
                
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ marginLeft:'20px',  marginTop: "10px" }}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.inputDiv}>
              <TextField
               variant="filled"
        id="date"
        label="Start Date"
        type="date"
        value={user.startDate || ''}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginTop:'10px'}}
        
       
      />
              </div>
              <div className={styles.inputDiv}>
                <TextField
                  id="filled-basic"
                  label="Absences"
                  variant="filled"
                  value={user.absences || ''}
                 
                  InputLabelProps={{
                    shrink: true,
                  }}
                  
                  sx={{width:'108px',marginLeft:'54px',  marginTop: "10px" }}
                />
              </div>
              <div className={styles.i}>
            
              
                
                <TextField
                  id="filled-basic"
                  variant="filled"
                  placeholder = "Core team member"
                  value={user.isCoreTeamMember || ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                           <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked  />}    />
   
    </FormGroup>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ marginLeft:'20px',  marginTop: "10px" }}
                 
                />


              </div>
            </div>
          </div>
          <div className={`${styles.myProfDiv} ${styles.inputDiv}`}>
            
         
         
            <TextField
              id="filled-basic"
              variant="filled"
              label="Slack"
              placeholder="Enter you slack user name"
              value={user.slackUserName || ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <img className={styles.slack} src={slack} alt="" />
                  </InputAdornment>
                ),
              }}
            />
              
            <TextField
              id="filled-basic"
              variant="filled"
              label="Github"
              placeholder=" Enter your github user name"
             
              value={user.gitHubUserName || ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  <img className={styles.kiss} src={kiss} alt="" />
                  </InputAdornment>
                ),
              }}
        sx={{marginTop:'10px'}}
            />
            
          </div>
        </div>
      </div>
      <div className={styles.divTime}>
        <h1> Work logs</h1>
       
        
        <div className={styles.newPiker}>
        {array.map((day) => (
           <div key={Math.random()} >
           <div  >
             <p className={styles.divDay}>{day}</p>
             <p className={styles.divDay1}>start/ end time</p>
           </div>
            {data[day].length ? (
              data[day].map((item) => (
                <div key={item.id} >
                  <TimePicker weekday={day} time={item} />
                </div>
              ))
            ) : (
              <div className="empty">Empty</div>
            )}
             <button className={styles.inTime11} onClick={()=>addDataHours(day)}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
            </div>
           
 ))}
 </div>
 
      </div>
      
    </div>
    

  );
};

export default About;
