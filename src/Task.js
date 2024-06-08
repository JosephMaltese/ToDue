import React from 'react';
import "./App2.css";
import StatusBox from './statusBox';

// props include: taskName, taskStatus, taskPostDate, taskDescription
function Task(props) {

    return (
        <li>
            <div className="item">
                <h2 className="taskTitle">{props.taskName}</h2>
                <p className="statusHeading">Status:</p>
                <StatusBox />
                <button className="deleteButton" onClick={props.onTaskDelete}>X</button>
                <p className="date">Created On: {props.taskPostDate}</p>
                <p className="dueDate">Due Date: {props.taskDueDate.toDateString()}</p>
            </div>

        </li>
    );
}

export default Task;