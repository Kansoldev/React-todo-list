import React from 'react';

function TodoItem({todo, remove, markComplete, undoComplete}) {
    const addStyle = () => {
        return {
            textDecoration : todo.completed ? 'line-through' : 'none'
        }
    }

    return (
        <li className="item" style={addStyle()}>
            <span>{todo.item}</span>
            <div className="float-right">
                <button onClick={() => markComplete(todo.id)} className="btn btn-success btn-sm">
                    <i className="fa fa-check"></i>
                </button>

                <button onClick={() => undoComplete(todo.id)} className="btn btn-danger btn-sm">
                    <i className="fa fa-undo"></i>
                </button>

                <button onClick={() => remove(todo.id)} className="btn btn-primary btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </li>
    );
}

export default TodoItem;