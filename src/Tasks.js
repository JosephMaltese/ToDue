import react from 'react';
import Task from './Task';
import "./App2.css";



function Tasks(props) {

    const ulStyle = {
        backgroundColor: props.tasks.length !== 0 ? '#393e46' : 'transparent',
        padding: "1% 4%",
        position: "relative",
        width: "97%",
        paddingBottom: "2%",
        marginTop: "0",
    }

    return (
        <div className="taskList">
            <ul style={ulStyle}>
                {props.tasks.map((task, index) => 
                    <Task
                    key={index}
                    taskName={task.taskName}
                    taskPostDate={task.taskPostDate}
                    taskDueDate={task.taskDueDate}
                    onTaskDelete={() => props.onTaskDelete(index)}
                    />
                
                )}
            </ul>
        </div>
    );
}

export default Tasks;