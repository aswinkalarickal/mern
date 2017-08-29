import {FETCH_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK} from "../actions/tasksAction";

let initialState = [];

const tasks = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TASKS:
            state = action.payload;
            break;
        case ADD_TASK:
            state = [...state, action.payload];
            break;
        case UPDATE_TASK:
            state = state.map((item) => {
                if(item._id !== action.payload._id) {
                    return item;
                }
                return {
                    ...item,
                    ...action.payload
                }
            });
            break;
        case DELETE_TASK:
            if(action.payload.n === 1) {
                let index = -1;
                state.forEach((item, i) => {
                    if(item._id === action.taskId) {
                        index = i;
                    }
                });
                if(index > -1) {
                    state = [...state.slice(0, index), ...state.slice(index + 1)]
                }
            }
            break;
    }
    return state;
};

export default tasks;
