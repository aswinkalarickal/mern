import React from "react";

export class Tasks extends React.Component {
    onUpdateStatus(taskId, e) {
        this.props.onStatusUpdate(taskId, e.target.checked);
    }

    onDeleteTask(taskId) {
        this.props.onDeleteTask(taskId);
    }

    render() {
        return(
            <div className="task-list">
                {this.props.tasks.map((task, i) =>
                    <div key={i} className="row">
                        <div className="col-md-1 col-xs-1">
                            <input type="checkbox" onChange={this.onUpdateStatus.bind(this, task._id)} checked={task.isDone || false}/>
                        </div>
                        <div className="col-md-7 col-xs-7">
                            {task.title}
                        </div>
                        <div className="col-md-4 col-xs-4">
                            <button className="btn btn-danger" onClick={this.onDeleteTask.bind(this, task._id)}>Delete</button>
                        </div>
                        <br/><br/>
                    </div>
                )}
            </div>
        );
    }
}
