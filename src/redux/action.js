import { ADD_TO_CART } from "./constant";
export const addToCart = (data) => {
  console.warn("Action addToCard is called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
