import React, { Component } from 'react'
import CreateTodo from './components/create_todo'
import TodoList from './components/todo_list'

class App extends Component {
  state = {todoList: [], count: 0}

  addTodo = (newTodo) => {
    this.setState({todoList: [newTodo, ...this.state.todoList], count: this.state.count + 1})
  }

  getCompletedId = (id) => {
    let finished = this.state.todoList.find((todo)=> id===todo.id)
    let remaining = this.state.todoList.filter((todo)=> id!==todo.id)

    let newTodoList = []
    finished.isFinished = !finished.isFinished

    if (finished.isFinished)
      newTodoList = [...remaining, finished]
    else newTodoList = [finished, ...remaining]
    this.setState({todoList: newTodoList})
  }

  getEditId = (id) => {
    // let to_edit = this.state.todoList.find((todo)=> id===todo.id)
    // let remaining = this.state.todoList.filter((todo)=> id!==todo.id)
  }

  getDeletedId = (id) => {
    let remaining = this.state.todoList.filter((todo)=> id!==todo.id)
    this.setState({todoList: remaining})
  }

  render() {
    return (
      <div>
        <h1>ProductiMan</h1>
        Your productivity manager...
        <hr/>
        <CreateTodo addTodo={this.addTodo} id={this.state.count}/> <hr/>
        <TodoList todoList={this.state.todoList} getCompletedId={this.getCompletedId} getEditId={this.getEditId} getDeletedId={this.getDeletedId}/>
      </div>
    )
  }
}

export default App