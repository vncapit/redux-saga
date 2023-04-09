import { ADD_TO_CART } from "./constant";

export const cartData = (state = [], action) => {
  console.warn("reducer called", action.type, action.data, state);
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    default:
      return state;
  }
};
