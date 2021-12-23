import React from "react";
import "../index.css";

const ClearAll = (props) => {
  const ClearAllTasks = () => {
    localStorage.clear();
    props.setTasks([]);
  };

  return (
    <button className="btn toggle-btn marginProp" onClick={ClearAllTasks}>
      Clear All
    </button>
  );
};

export default ClearAll;
