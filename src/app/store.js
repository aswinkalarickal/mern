import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import tasks from "./reducers/tasksReducer";

export default createStore(
    combineReducers({
        tasks
    }),
    {},
    applyMiddleware(logger, thunk)
);
