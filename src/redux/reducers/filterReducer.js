import { ActionTypes } from "../actions/action-types";

const initialState = {
  filter: 0,
};

export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FILTER:
      return { ...state, filter: payload };

    default:
      return state;
  }
};
