import { ActionTypes } from "../actions/action-types";

const { SET_FILTER } = ActionTypes;

export const setFilter = (btnId) => {
  return {
    type: SET_FILTER,
    payload: btnId,
  };
};
