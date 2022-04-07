import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

import { useSelector } from "react-redux";
import Message from "../Message/Message";

const TodoList = () => {
  const filter = useSelector((state) => state.filter.filter);
  const idRenamingTodo = useSelector((state) => state.allTodos.idRenamingTodo);

  let todos = useSelector((state) => state.allTodos.todos).map((todo, i) =>
    Object.assign(todo, { id: i })
  );

  if (filter === 1) todos = todos.filter((todo) => !todo.completed);
  else if (filter === 2) todos = todos.filter((todo) => todo.completed);

  if (todos.length) {
    return (
      <ul className="todo__list">
        {todos.map((todo) => {
          const disabled =
            idRenamingTodo !== false && idRenamingTodo === todo.id
              ? false
              : true;
          return (
            <TodoItem
              id={todo.id}
              disabled={disabled}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </ul>
    );
  } else {
    return <Message textId={filter} />;
  }
};

export default TodoList;
