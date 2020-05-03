import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import '../todo.css';

function Todo({todos, removeAll, remove, markComplete, undoComplete, addTodo}) {
    return (
        <React.Fragment>
            <h1 className="text-center text-uppercase mt-4">To-do List</h1>

            <TodoForm addTodo={addTodo} />
            
            <div className="container">
                <div className="todo-container">
                { todos.length === 0 && <h4 className="text-center">Enter your todo lists</h4> }
                    <ul className="todo-list">
                        {
                            todos.map((todo) => {
                                return (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        remove={remove}
                                        markComplete={markComplete}
                                        undoComplete={undoComplete}
                                    />
                                )
                            })
                        }
                    </ul>

                    <div className="todo-btn text-center">
                        <button
                            onClick={removeAll}
                            className="btn btn-danger btn-md"
                            disabled={todos.length === 0}
                        >
                             Clear All
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Todo;