import React, { useState } from 'react'

const Pratice = () => {
 const [todos , setTodos] = useState([]);
 const [inputValue , setInputValue] = useState('');

 const handleInputChange = (event) => {
    setInputValue(event.target.value)
 }
 const handleFormSubmit = (event) =>{
    event.preventDefault();

    if(inputValue){
        const newTodo = {id:todos.length , name:inputValue};
        setTodos(...todos, newTodo)
        setInputValue('')
    }
 }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type='text'
            placeholder='Enter your Todo'
            value={inputValue}
            onChange={handleInputChange}/>
            <button type='submit'>Add</button>
        </form>
        {
            todos.map((todo) => {
                <h1>{todo.id} span{todo.name}</h1>
            })
        }
    </div>
  )
}

export default Pratice