import "whatwg-fetch";

export function fetchTasks() {
    return dispatch => {
        fetch("/api/tasks", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch({
                type: "FETCH_TASKS",
                payload: json
            });
        });
    }
}

export function addTask(title) {
    return dispatch => {
        fetch("/api/task", {
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
                type: "ADD_TASK",
                payload: json
            });
        });
    }
}

export function updateTask(taskId, isDone) {
    return dispatch => {
        fetch("/api/task/" + taskId, {
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
                type: "UPDATE_TASK",
                payload: json
            });
        });
    }
}

export function deleteTask(taskId) {
    return dispatch => {
        fetch("/api/task/" + taskId, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch({
                type: "DELETE_TASK",
                payload: json,
                taskId: taskId
            });
        });
    }
}
