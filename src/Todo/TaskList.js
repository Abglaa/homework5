import React from "react";
import { useState } from "react";
import '../App.css';




export default function TaskList({
    todos,
    onChangeTodo,
    onDelete
}) {
    return (
        <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                <Task
                    todo={todo}
                    onChange={onChangeTodo}
                    onDelete={onDelete}
                />
              </li>
            ))}
        </ul>
    )
}

function Task({todo, onChange, onDelete}){
    const [isEditing, setIsEditing] = useState(false)
    let todoContent
    if (isEditing) {
        todoContent = (
            <>
                <input value={todo.title}
                onChange={e => {
                    onChange({
                        ...todo,
                        title: e.target.value
                    })
                }}/>
                <button className="save" onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        todoContent = (
            <>
                {todo.title}
                <button className="edit" onClick={() => setIsEditing(true)}> 
                    Edit
                </button>
            </>
        )
    }
    return (
        <label>
            <input type="checkbox" checked={todo.done}
              onChange={e => {
                onChange({...todo, done: e.target.value});
              }}
            />
            {todoContent}
            <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
        </label>
    )
}