import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (state = [], action) => {
  console.warn("reducer called", action.type, action.data, state);
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_FROM_CART:
      let newState = state.filter((item, index) => index < state.length - 1);
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
