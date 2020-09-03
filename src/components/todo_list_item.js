import React, { useState } from 'react'

const TodoListItem = ({todo, getCompletedId}) => {
  const handleTaskCompleted = () => {
    return getCompletedId(todo.id)
  }

  return (
    <span>
      {todo.isFinished ? <strike>{todo.text}</strike> : todo.text}
      <button onClick={handleTaskCompleted}>Done</button> <br/>
    </span>
  )
}

export default TodoListItem