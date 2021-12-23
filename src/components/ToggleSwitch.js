import React from "react";
import "../index.css";

const ToggleSwitch = (props) => {

  return (
    <div>   
<label className="switch">
  <input type="checkbox" onChange={(e)=>props.GetDarkTheme(e)}/>
  <span className="slider round"></span>
</label>
    </div>
  );
};

export default ToggleSwitch;
