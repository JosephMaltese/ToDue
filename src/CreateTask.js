import React from "react";
import "./App2.css";

function CreateTask(props) {

    return (
        <div>
            <form>
                <input type="text" name="taskName" value={props.titletext} onChange={props.onNameChange}/>
                <button className="submitTask" type="submit" onClick={props.onSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default CreateTask;




