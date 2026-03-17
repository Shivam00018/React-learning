import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todolist () {
    let [todos, settodos] = useState([{task:"sample task", id : uuidv4()}])
    let [newtodo, setnewtodo] = useState("");

    let addnewtask = () => {
        settodos((prevtodos) =>  {
            return [...prevtodos,{task:newtodo , id: uuidv4()}]
        });
        setnewtodo("");
    }

    let updatetodovalue = (event)  => {
        setnewtodo(event.target.value)
    }

    let Deletetodo = (id) => {
        settodos((prevtodos) => todos.filter((prevtodos) => prevtodos.id != id));
    };
    
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
                <li key = {todos.id}>
                    <span>{todos.task}</span>
                    <button onClick={ () => Deletetodo(todos.id)}>Delete</button>
                </li>
               ))}
            </ul>
        </div>
    )
}