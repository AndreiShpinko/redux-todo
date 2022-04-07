import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleDoneTodo,
  renameTodo,
  toggleDisabledTodo,
} from "../../redux/actionCreators/todoActions";
import Button from "../Button/Button";

import "./TodoItem.scss";

const TodoItem = (props) => {
  const {
    id,
    disabled,
    todo: { text, completed },
  } = props;

  const dispatch = useDispatch();
  const textInput = useRef(null);

  const renameItem = (value) => {
    if (value.length !== 0) dispatch(renameTodo(id, value));
  };

  const toggleRenameBtn = () => dispatch(toggleDisabledTodo(id));
  const completeItem = () => dispatch(toggleDoneTodo(id));
  const deleteItem = () => dispatch(removeTodo(id));

  useEffect(() => {
    if (!disabled) textInput.current.focus();
  }, [disabled]);

  return (
    <li className={completed ? "todo__item completed" : "todo__item"}>
      <input
        type="text"
        value={text}
        onChange={(e) => renameItem(e.target.value)}
        disabled={disabled}
        ref={textInput}
      />
      <div className="todo__btns">
        <Button clickFunction={toggleRenameBtn} style={!disabled}>
          <i className="fa-solid fa-pen-clip"></i>
        </Button>
        <Button clickFunction={completeItem} disabled={!disabled}>
          <i className="fa-solid fa-check"></i>
        </Button>
        <Button clickFunction={deleteItem} disabled={!disabled}>
          <i className="fa-solid fa-trash"></i>
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
