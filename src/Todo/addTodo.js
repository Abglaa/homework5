import React from "react";
import { useState } from "react";
import '../App.css';



export default function AddTodo({onAddTodo}) {
    const [title, setTitle] = useState("")

    return(
        <>
            <div className="add_todo">
                <input style={{ width: '400px', height: '35px', border: 'none'}}
                    placeholder="   Add todo"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                onClick={() => {
                    setTitle('')
                    onAddTodo(title)
                }}
                >
                    Add Task
                </button>
            </div>
        </>
    )
} 