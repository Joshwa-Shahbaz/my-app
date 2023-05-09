import React, { useState } from 'react'

const Hook = () => {
    const [todos, setTodos] = useState([
        { id: 1, name: 'joshwa' },
        { id: 2, name: 'haseeb' },
        { id: 3, name: 'muneeb' }
      ]);
    // console.log(todos.length +1);


      const [inputValue, setInputValue] = useState('');
    
      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue) {
          const newTodo = { id: todos.length +1, name: inputValue };
          setTodos([...todos, newTodo]);
          setInputValue('');
        }
      };
    
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
        {todos.map((todo) => (
            <h1>{todo.id} <span>{todo.name}</span> </h1>
        ))}
  </div>
  )
}

export default Hook