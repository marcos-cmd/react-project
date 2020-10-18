import React from 'react';
import NewToDoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
// import './TodoList.css';


const TodoList = ({ todos = [] }) => (
    <div className="list-wrapper">
        <NewToDoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;
