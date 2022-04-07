import { ActionTypes } from "../actions/action-types";

const {
  SET_TODO,
  REMOVE_TODO,
  RENAME_TODO,
  TOGGLE_DONE_TODO,
  TOGGLE_DISABLED_TODO,
} = ActionTypes;

export const setTodo = (todo) => {
  return {
    type: SET_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const toggleDoneTodo = (id) => {
  return {
    type: TOGGLE_DONE_TODO,
    payload: id,
  };
};

export const renameTodo = (id, text) => {
  return {
    type: RENAME_TODO,
    payload: { id, text },
  };
};

export const toggleDisabledTodo = (id) => {
  return {
    type: TOGGLE_DISABLED_TODO,
    payload: id,
  };
};
