import React, { useState } from 'react';

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        if (todo) {
            addTodo(todo);

            setTodo("");
        }
    } 

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="form-group d-flex">
                <input type="text" value={todo} className="form-control w-50 ml-auto mr-2" style={{boxShadow: 'none', color: "#444"}} onChange={e => setTodo(e.target.value)} placeholder="Enter todo..." />
                <input type="submit" className="btn btn-primary mr-auto" value="Add Todo" />
            </div>
        </form>
    )
}

export default TodoForm;