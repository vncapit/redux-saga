import { INCREMENT, DECREMENT } from "./counterActionType";

export const incrementAction = (param) => {
  return {
    type: INCREMENT,
    payload: param,
  };
};

export const decrementAction = (param) => {
  return {
    type: DECREMENT,
    payload: param,
  };
};
