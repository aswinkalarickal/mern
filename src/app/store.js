import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import tasks from "./reducers/tasksReducer";

const reducers = combineReducers({
    tasks: tasks
});

export default createStore(
    reducers,
    {},
    applyMiddleware(logger, thunk)
);
