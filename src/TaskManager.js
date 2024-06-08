import { React, useState} from "react";
import Tasks from "./Tasks";
import CreateTask from "./CreateTask";
import "./App2.css";
import { isVisible } from "@testing-library/user-event/dist/utils";
import newLogo from './newLogo.png';


// Task objects will look like: 
// {taskName : ""
// taskPostDate: ""
// }

function TaskManager() {
    const [taskDueDate, setTaskDueDate] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");

    function handleTaskNameChange(event) {
        setTaskName(event.target.value);
    }

    function handleTaskDelete(index) {
        setTasks((prev) => prev.filter((task, i) => i !== index));
    }


    function handleTaskSubmit (event) {
        event.preventDefault();

        if (taskName === "") {
            return;
        }

        if (taskName.length > 40) {
            alert("Task name is too long. Please keep it under 40 characters.");
            setTaskName("");
            return;
        }

        if (taskDueDate === null) {
            alert("Please select a due date for the task.");
            return;
        }

        const newTask = {taskName: taskName, taskPostDate: new Date().toLocaleDateString(), taskDueDate: taskDueDate};
        setTasks((prev) => [newTask, ...prev]);
        setTaskName("");
        setTaskDueDate(null);
    }

    const existingStyle = {
        visibility: tasks.length !== 0 ? 'visible' : 'hidden',
        width: "105%",
        textAlign: "center",
        paddingTop: "10px",
        marginBottom: "0%",
        paddingBottom: "1%",
    }

    return (<div>
                <div className="logo-header">
                    <img src={newLogo} className="logo" alt="logo" />
                    <h1 className="mainHeader" >ToDue</h1>
                </div>
                
                <div className="mainContainer">
                    <div className="addTask">
                        <h2 id="addtask">Add New Task</h2>
                        <CreateTask onSubmit={handleTaskSubmit} titletext={taskName} onNameChange={handleTaskNameChange} dueDate={taskDueDate} updateDueDate={setTaskDueDate}/>  
                    </div>

                    <h2 style={existingStyle} className="Existing">Existing Tasks</h2>
                    <div className="tasks">
                        <Tasks tasks={tasks} onTaskDelete={handleTaskDelete} />
                    </div> 
                </div>
                
                 
            </div>
            );
}

export default TaskManager;