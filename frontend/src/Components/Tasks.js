import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Task from "./Task";

const Tasks = () => {
  return (
    <div className="container tasks mt-4" style={{ width: 400, border: 1 }}>
      <Button text="Add" color="Red" />
      <Task />
    </div>
  );
};

Tasks.propTypes = {};

export default Tasks;
