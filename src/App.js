import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const initialTodos = () => JSON.parse(window.localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  })
  
  const addTodo = value => {
    const newTodos = [...todos, {id: uuidv4(), item: value, completed: false}];

    setTodos(newTodos);
  }

  const removeAll = () => {
    setTodos([]);
  }

  const Remove = id => {
    const newTodos = todos.filter(todo => todo.id !== id);

    setTodos(newTodos);
  }

  const markComplete = id => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = true
      }

      return todo;
    })

    setTodos(newTodo);
  }

  const undoComplete = id => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = false
      }

      return todo;
    })

    setTodos(newTodo);
  }

  return (
    <Todo
      todos={todos}
      removeAll={removeAll}
      remove={Remove}
      markComplete={markComplete}
      undoComplete={undoComplete}
      addTodo={addTodo}
    />
  );
}

export default App;