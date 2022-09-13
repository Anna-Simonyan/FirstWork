import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from '../../../../Store/slices/timePiker';
import pngx from "../../../../assets/Images/x.png";
import styles from "./TimePicker.module.css"
import { TextField } from "@mui/material";


const TimePicker1= ({weekday, time}) => {

	const dispatch = useDispatch();
  
    const clearDataHours = (weekday, time) => {
        dispatch( deleteTask({ weekday, time }));
      };
    
	return (
		
			
			<div>
               <TextField
       id="filled-basic"
       variant="standard"
       type="time"
  
       sx={{ width: "100%" }}
      
      
     /> 
        
            <img className={styles.imgx} src={pngx} alt=""  
				  onClick={() => clearDataHours(weekday, time)}
				/>
               
				
			</div>
		
	);
};

export default TimePicker1;




