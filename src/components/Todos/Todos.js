import React, {useEffect, useState} from 'react';

import {jsonService} from "../../services/jsonplaceholder.service";
import Todo from "../Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        jsonService.getTodos().then(({data}) => setTodos([...data]))
    }, [])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;