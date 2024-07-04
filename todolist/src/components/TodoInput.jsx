import React, { useState } from 'react'

export const TodoInput = (props) => {
  const {handleAddTodos,todoValue,setTodoValue} = props

  return (
    <header>
      <input 
      placeholder='Enter Todo Item...'
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={() =>{
        handleAddTodos(todoValue)
        setTodoValue('')}}>
        Add
      </button>
    </header>
  )
}
