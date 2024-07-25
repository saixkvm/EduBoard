import { useState } from "react";
const Create = () => {

    const [semclass, setSemClass] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const classToSend = {className: semclass, tasks: []};

        try {
            const response = await fetch("/api/classes", { // Ensure the correct endpoint
                method: 'POST',
                body: JSON.stringify(classToSend),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });

            const json = await response.json();
            if (response.ok){
                console.log(json);
                setSemClass("");
                
            } else {
                console.log("Error")
            }
        } catch (err) {
            console.log("error")
        }
    }

    return ( 
        <div className="createClass">
            <h2>Create New Class</h2>

            <div className="createForm">
                <form className="create" onSubmit={handleSubmit}>
                    <label>Class Name</label>
                    <br></br>
                    <br></br>
                    <input 
                        type = "text"
                        onChange={(e) => setSemClass(e.target.value)}
                        value = {semclass}
                    />
                    <br></br>
                    <button>Add Class</button>
                </form>
            </div>

        </div>
     );
}
 
export default Create;