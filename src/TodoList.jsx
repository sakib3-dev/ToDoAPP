import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";

const TodoList = (props) => {

  

  return (
    <div className="todo-style">
      <FaRegTimesCircle className="icon" onClick={() => {
        props.onSelect(props.id)
      }} />
      <li>{props.text}</li>
    </div>
  );
};

export default TodoList;
