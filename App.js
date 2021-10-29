import React, { useState } from 'react';
import Form from './Form'
import List from './List'
import { nanoid } from 'nanoid';

const App = () => {
    const [todos, setTodos] = useState([])
    //追加機能
    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                content: value,
                id: nanoid()
            }
        ])
    }

    //削除機能
    const deleteTodo = (id) => {
        //渡されたidをもとにそのidのついたtodoを削除する
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <>
            <h1>ToDo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    );
};

export default App