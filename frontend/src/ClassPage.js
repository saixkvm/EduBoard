import { useState, useEffect } from "react";
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskCreate from "./TaskCreate";


const ClassPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    useEffect(() => {
        fetch(`/api/classes/${id}`)
        .then(res => {return res.json()})
        .then(data => setTitle(data.className))
    })

    useEffect(() => {
        fetch(`/api/classes/${id}/tasks`)
        .then((res) => {
            if (!res.ok){
                console.log("error")
            }
            return res.json()
        }
        )
        .then((data) => 
        {
            console.log(data);
            setTasks(data);
        })
    }, [id])

    const handleDelete = async(id) => {
        try {
            const response = await fetch('/api/classes/' + id,
                {
                    method: 'DELETE'
                }
            );
            const json = await response.json();
            if (response.ok){
                console.log(json);
                navigate('/');
            }
        }
        catch(error){
            console.log("Error");
        }
    }

    const handleTaskDelete = async(taskid) => {
        try {
            const response = await fetch(`/api/classes/${id}/tasks/${taskid}`,
                {
                    method: 'DELETE'
                }
            )
            const json = await response.json();
            if (response.ok){
                console.log(json);
                navigate(`/class/${id}`)
                navigate(0);
            }
        } catch (error) {
            console.log("Error");
        }
    }

    return ( 
        <div className="taskBody">

        <div className="classandbutton">
            <h1>{title}</h1>
            <button className='button' onClick={() => {handleDelete(id)}}>delete class</button>
        </div>

        
            <div>
                <h3>Tasks</h3>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task._id}>
                            <div className="taskandbutton">
                                <p>{task.taskName} ({task.dueDate})</p>
                                <button className = "taskbutton1" onClick={() => {handleTaskDelete(task._id)}}>x</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No tasks found.</p>
                )}
                <br></br>
            </div>
        
            <TaskCreate classid = {id}/>
        </div>
     );
}
 
export default ClassPage;