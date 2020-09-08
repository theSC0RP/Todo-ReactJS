import React from 'react'

const TodoListItem = ({todo, getCompletedId, getEditId, getDeletedId}) => {
  const handleTaskCompleted = () => {
    return getCompletedId(todo.id)
  }

  const handleTaskEdit = () => getEditId(todo.id)
  const handleTaskDelete = () => getDeletedId(todo.id)

  return (
    <div className="row mb-2 ml-2">
      <div className="col"> &#9642; {todo.isFinished ? <strike>{todo.text}</strike> : todo.text}</div>
      <div className="col-2">
        <button className="ml-2 btn btn-success mr-2 fa fa-check" onClick={handleTaskCompleted}></button>
        <button className="btn btn-danger mr-2 fa fa-trash" onClick={handleTaskDelete}></button>
        <button className="btn btn-warning mr-4 fa fa-pencil fa-4x" onClick={handleTaskEdit}></button> <br/>
      </div>
    </div>
  )
}

export default TodoListItem