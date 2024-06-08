import React, { useState} from "react";
import "./App2.css";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Task from "./Task";




function CustomDatePicker(props) {

    return (
        <div className="datePickerDiv">

            <DatePicker
                selected={props.dueDate}
                onChange={(date) => props.updateDueDate(date)}
                dateFormat="yyyy/MM/dd"
                placeholderText="Select a due date"
                isClearable
                showYearDropdown
                scrollableYearDropdown
                minDate={new Date()}
                maxDate={new Date().setFullYear(new Date().getFullYear() + 1)}
            />
        
        </div>
    );
}

function CreateTask(props) {

    return (
        <div>
            <form>
                <input type="text" name="taskName" value={props.titletext} onChange={props.onNameChange}/>
                <CustomDatePicker dueDate={props.dueDate} updateDueDate={props.updateDueDate}/>
                <button className="submitTask" type="submit" onClick={props.onSubmit}>+</button>
            </form>
        </div>
    );
}

export default CreateTask;




