import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todoReducer } from "./todoReducer";

const reducers = combineReducers({
  allTodos: todoReducer,
  filter: filterReducer,
});

export default reducers;
