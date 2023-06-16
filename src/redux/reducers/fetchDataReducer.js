import { FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "../actions/fetchDataActionType";

const initialState = {
  users: [],
};

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};
