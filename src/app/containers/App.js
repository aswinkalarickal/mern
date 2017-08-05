import React from "react";
import {connect} from "react-redux";

import {TaskAddForm} from "../components/TaskAddForm";
import {Tasks} from "../components/Tasks";
import {fetchTasks, addTask, updateTask, deleteTask} from "../actions/tasksAction";

class App extends React.Component {
    componentWillMount() {
        this.props.fetchTasks();
    }

    render() {
        return (
            <div className="container">
                <h1>Tasks List</h1>
                <hr/>
                <TaskAddForm onTaskSubmit={(title) => this.props.addTask(title)}/>
                <Tasks tasks={this.props.tasks} onStatusUpdate={(taskId, isDone) => this.props.updateTask(taskId, isDone)} onDeleteTask={(taskId) => this.props.deleteTask(taskId)}/>
            </div>
        );
    }
}

const mapStateToProps = (tasks) => {
    return tasks;
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: () => {
            dispatch(fetchTasks());
        },
        addTask: (title) => {
            dispatch(addTask(title));
        },
        updateTask: (taskId, isDone) => {
            dispatch(updateTask(taskId, isDone));
        },
        deleteTask: (taskId) => {
            dispatch(deleteTask(taskId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
