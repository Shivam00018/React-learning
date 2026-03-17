import { useState } from "react"

export default function Todolist () {
    let [todos, settodos] = useState(["sample task"])
    let [newtodo, setnewtodo] = useState("");

    let addnewtask = () => {
        settodos([...todos, newtodo]);
        setnewtodo("");
    }

    let updatetodovalue = (event)  => {
        setnewtodo(event.target.value)
    }
    
    return(
        <div> 
            <br />
            <input placeholder="add a task" value={newtodo} onChange={updatetodovalue} />
            <br />
            <button onClick={addnewtask}>Add task</button>
            <br />
            <br />
        
            <hr />
            <h3>ToDo List</h3>
            <ul>
               {todos.map((todos) => (
                <li>{todos}</li>
               ))}
            </ul>
        </div>
    )
}