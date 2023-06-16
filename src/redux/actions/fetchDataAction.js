import { FETCH_USER_FAILED, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./fetchDataActionType";

export const fetchUserRequest = (params) => {
  return {
    type: FETCH_USER_REQUEST,
    payload: params,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const fetchUserFailed = () => {
  return {
    type: FETCH_USER_FAILED,
  };
};
