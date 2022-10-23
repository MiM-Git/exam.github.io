import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import  './PopUp.css'
const PopUp = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}><AiOutlineCloseCircle style={{fontSize:' 40px',color:'wheat'}} /></span>
        {props.content}
      </div>
    </div>
  );
};

export default PopUp;