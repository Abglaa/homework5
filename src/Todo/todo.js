import React from "react";
import { useState } from "react";
import AddTodo from "./addTodo";
import TaskList from "./TaskList";
import '../App.css';


let nextId = 3;
const initialTodos = [
    {id: 0, title: ' Родиться Кыргызстане', done: true},
    {id: 1, title: ' Стать программистам', done: false},
    {id: 2, title: ' Стать БЕТМЕНОМ', done: false},

    
]

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos)

    function handleAppTodos(title){
        setTodos([
            ...todos, 
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }
    function handleChangeTodos(nextTodo) {
        setTodos(
            todos.map((t) => {
                if (t.id === nextTodo.id) {
                    return nextTodo;
                } else {
                    return t
                }
            })
        );
    } 
    function handleDeleteTodo(todoId){
        setTodos(
            todos.filter((t)=> t.id !== todoId)
        )
    }
    return (
        <>
            <AddTodo onAddTodo={handleAppTodos}/>
            <TaskList todos={todos}
              onChangeTodo={handleChangeTodos}
              onDelete={handleDeleteTodo}/>
        </>
    )
    
}

