import "whatwg-fetch";

export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export function fetchTasks() {
    return dispatch => {
        fetch("/api/tasks", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch({
                type: FETCH_TASKS,
                payload: json
            });
        });
    }
}

export function addTask(title) {
    return dispatch => {
        fetch("/api/tasks", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title
            })
        }).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch({
                type: ADD_TASK,
                payload: json
            });
        });
    }
}

export function updateTask(taskId, isDone) {
    return dispatch => {
        fetch("/api/tasks/" + taskId, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isDone: isDone
            })
        }).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch({
                type: UPDATE_TASK,
                payload: json
            });
        });
    }
}

export function deleteTask(taskId) {
    return dispatch => {
        fetch("/api/tasks/" + taskId, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch({
                type: DELETE_TASK,
                payload: json,
                taskId: taskId
            });
        });
    }
}
