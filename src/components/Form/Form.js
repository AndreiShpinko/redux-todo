import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../../redux/actionCreators/todoActions";
import Button from "../Button/Button";
import "./Form.scss";

const Form = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setInput("");
    dispatch(setTodo(input));
  };

  return (
    <form className="form" onSubmit={(e) => addTodo(e)}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button disabled={input.length === 0 ? true : false}>Add</Button>
    </form>
  );
};

export default Form;
