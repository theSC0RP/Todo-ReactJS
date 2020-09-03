import React, { useState } from 'react'

const TodoListItem = ({todo, getCompletedId, getEditId, getDeletedId}) => {
  const handleTaskCompleted = () => {
    return getCompletedId(todo.id)
  }

  const handleTaskEdit = () => {
    return getEditId(todo.id)
  }

  const handleTaskDelete = () => {
    return getDeletedId(todo.id)
  }

  return (
    <span>
      {todo.isFinished ? <strike>{todo.text}</strike> : todo.text}
      <button onClick={handleTaskCompleted}>Done</button>
      <button onClick={handleTaskDelete}>Delete</button>
      <button onClick={handleTaskEdit}>Edit</button> <br/>
    </span>
  )
}

export default TodoListItem