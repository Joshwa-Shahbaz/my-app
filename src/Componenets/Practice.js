import React, { useState } from 'react'


const Practice = () => {

const [todos , setTodos] = useState([]);

 const [inputValue , setInputValue] = useState('');

 const handleInputChange = (event) => {
    setInputValue(event.target.value)
 }
 const handleFormSubmit = (event) =>{
    event.preventDefault();

    if(inputValue !== ""){
        const newTodo = {name:inputValue};
          setTodos([...todos, newTodo]);
        setInputValue('')
    }
 }
 const handleDelete = (id) => {
    // console.log(index)
    const removedArr = todos.filter((todo , x)=> x !== id);

    setTodos(removedArr);
 }

 console.log(todos)
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type='text'
            placeholder='Enter your Todo'
            value={inputValue}
            onChange={handleInputChange}/>
            <button type='submit'>Add</button>
        </form>
        {todos?.map((todo , index) => {
            return <div key={index}>
            <h1> <span>{index+1}</span> {todo.name}</h1>
            <button onClick={() => handleDelete(index)}>delete</button>
            </div>
            })}
    </div>
  )
}

export default Practice