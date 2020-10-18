import React from 'react';
import { connect } from 'react-redux';
import { createToDo } from './actions';
// import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
   const [inputValue, setInputValue] = useState('');

   return (
   <div className="new-todo-form">
        <input 
        className="new-todo-input"
        type="text"
        placeholder="Type your new to-do here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}></input>
        <button 
        className="new-todo-btn"
        onClick={() => {
            const isDuplicateText =
                todos.some(todo => todo.text === inputValue);
            if (!isDuplicateText) {
                onCreatePressed(inputValue);
            setInputValue('');
            }
        }}
        ></button>
    </div>
   );
}

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect()(NewTodoForm);
