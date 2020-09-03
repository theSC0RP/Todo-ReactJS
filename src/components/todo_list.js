import React, { Component } from 'react'
import { render } from '@testing-library/react'
import TodoListItem from './todo_list_item'

const TodoList = ({todoList, getCompletedId}) => {
  const renderTodoList = () => todoList.map((todo)=>{
      return <TodoListItem key={todo.id} todo = {todo} getCompletedId={getCompletedId}/>
    })

  return (
    <div>
      {renderTodoList()}
    </div>
  )
}

export default TodoList
