import { useState, useEffect } from "react";
import {useNavigate } from 'react-router-dom';
const TaskCreate = ({classid}) => {

    const navigate = useNavigate();
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const taskToSend = { taskName: task, dueDate: date }; 
        try{
            const response = await fetch(`/api/classes/${classid}/tasks`,
                {
                    method: 'POST',
                    body: JSON.stringify(taskToSend),
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                }
            )
            const json = await response.json();
            if (response.ok){
                console.log(json);
                setTask("")
                setDate("");
                navigate("/class/"+classid);
                navigate(0);
            }
        }
        catch(error){
            console.log("Error")
        }
    }

    return ( 
        <form className="taskform" onSubmit={handleSubmit}>

            <h3>New Task</h3>
            <label>Task</label>
            <br></br>
            <input
                type = "text"
                onChange={(e) => setTask(e.target.value)}
                value = {task}
            />
            <br></br>
            <br></br>
            <label>Due Date</label>
            <br></br>
            <input
                type = "date"
                onChange={(e) => setDate(e.target.value)}
                value = {date}
            />
            <br></br>
            <br></br>
            <button className="taskbutton">create task</button>
        </form>

     );
}
 
export default TaskCreate;