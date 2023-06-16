import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { fetchDataSaga } from "./sagas/fetchDataSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchDataSaga);
