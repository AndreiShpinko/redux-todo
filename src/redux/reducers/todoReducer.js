import { ActionTypes } from "../actions/action-types";

const initialState = {
  todos: [],
  idRenamingTodo: false,
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TODO:
      return {
        todos: [...state.todos, { text: payload, completed: false }],
        idRenamingTodo: state.idRenamingTodo,
      };

    case ActionTypes.REMOVE_TODO:
      return {
        todos: [...state.todos.filter((todo, i) => i !== payload)],
        idRenamingTodo: state.idRenamingTodo,
      };

    case ActionTypes.TOGGLE_DONE_TODO:
      return {
        todos: [
          ...state.todos.map((todo, i) => {
            if (i === payload)
              return { text: todo.text, completed: !todo.completed };
            return todo;
          }),
        ],
        idRenamingTodo: state.idRenamingTodo,
      };

    case ActionTypes.RENAME_TODO:
      return {
        todos: [
          ...state.todos.map((todo, i) => {
            if (i === payload.id)
              return { text: payload.text, completed: todo.completed };
            return todo;
          }),
        ],
        idRenamingTodo: state.idRenamingTodo,
      };

    case ActionTypes.TOGGLE_DISABLED_TODO:
      return state.idRenamingTodo === payload
        ? { todos: state.todos, idRenamingTodo: false }
        : { todos: state.todos, idRenamingTodo: payload };

    default:
      return state;
  }
};
