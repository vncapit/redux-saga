import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";
export const addToCart = (data) => {
  console.warn("Action addToCard is called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.warn("Action removeFromCart is called", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
