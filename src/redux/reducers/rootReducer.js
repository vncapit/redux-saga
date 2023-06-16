import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { fetchDataReducer } from "./fetchDataReducer";
export const rootReducer = combineReducers({ counterReducer, fetchDataReducer });
