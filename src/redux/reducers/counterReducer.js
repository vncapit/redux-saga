import { INCREMENT, DECREMENT } from "../actions/counterActionType";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};
