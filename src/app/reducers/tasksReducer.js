import "whatwg-fetch";

const tasks = (tasks = [], action) => {
    switch(action.type) {
        case "FETCH_TASKS":
            tasks = action.payload;
            break;
        case "ADD_TASK":
            tasks = [...tasks, action.payload]
            break;
        case "UPDATE_TASK":
            tasks = tasks.map((item) => {
                if(item._id !== action.payload._id) {
                    return item;
                }

                return {
                    ...item,
                    ...action.payload
                }
            });
            break;
        case "DELETE_TASK":
            if(action.payload.n === 1) {
                let index = -1;
                tasks.forEach((item, i) => {
                    if(item._id === action.taskId) {
                        index = i;
                    }
                });
                if(index > -1) {
                    tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)]
                }
            }
            break;
    }
    return tasks;
};

export default tasks;
