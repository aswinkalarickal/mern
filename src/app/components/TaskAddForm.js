import React from "react";

export class TaskAddForm extends React.Component {
    onSubmitTask(e) {
        e.preventDefault();
        if(e.target.title.value + "" !== "") {
            this.props.onTaskSubmit(e.target.title.value);
            e.target.title.value = "";
        } else {
            alert("You need to specify a task!");
        }
    }

    render() {
        return(
            <form className="well" onSubmit={this.onSubmitTask.bind(this)}>
                <div className="form-group">
                    <input type="text" name="title" className="form-control" placeholder="Add Task..."/>
                </div>
            </form>
        );
    }
}
