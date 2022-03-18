import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import formTwoReducer from "./duck/formTwo";


import { watcherSaga } from "./sagas/rootSaga";



const reducer = combineReducers({
    formTwo: formTwoReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, 
    {}, composeEnhancers(
    applyMiddleware(...middleware))
    );

sagaMiddleware.run(watcherSaga);

export default store;