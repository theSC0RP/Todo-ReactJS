import React, { Component } from 'react'
import CreateTodo from './components/create_todo'
import TodoList from './components/todo_list'

class App extends Component {
  state = {editText: '', todoList: [], count: 0, list_type: 'all'}

  addTodo = (newTodo) => {
    this.setState({editText: "", todoList: [newTodo, ...this.state.todoList], count: this.state.count + 1})
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
    let to_edit = this.state.todoList.find((todo)=> id===todo.id)
    let remaining = this.state.todoList.filter((todo)=> id!==todo.id)
    this.setState({editText: to_edit.text, todoList: remaining})
  }

  getDeletedId = (id) => {
    let remaining = this.state.todoList.filter((todo)=> id!==todo.id)
    this.setState({todoList: remaining})
  }

  handleDeleteAllClicked = () => {
    this.setState({todoList: []})
  }

  handleShowAllClicked = () => {
    this.setState({list_type: 'all'})
  }

  handleShowFinishedClicked = () => {
    this.setState({list_type: 'finished'})
  }

  handleShowOngoingClicked = () => {
    this.setState({list_type: 'ongoing'})
  }

  filterTodoList = () => {
    if(this.state.list_type === 'finished')
      return this.state.todoList.filter((todo)=> todo.isFinished === true)
    else if(this.state.list_type === 'ongoing')
      return this.state.todoList.filter((todo)=> todo.isFinished === false)
    return this.state.todoList
  }

  render() {
    return (
      <div>
        <header className="row py-3" >
          <div className="mx-auto"> 
            <div className="d-flex"><h1 className="text-danger">Producti</h1><h1>Man</h1></div>
            <em className="ml-5">Your productivity manager</em>
          </div>
        
        </header>
        <div className="mx-3 py-2"><CreateTodo editText = {this.state.editText} addTodo={this.addTodo} id={this.state.count}/></div>
        
        <div className="row mt-3 mx-3 bg-light">
          <div className="col-2">
            <div className="row my-5 mx-4"><button className="btn btn-secondary" onClick={this.handleDeleteAllClicked} style={{width: 150}}>Delete All</button></div>
            <div className="row my-5 mx-4"><button className="btn btn-secondary" onClick={this.handleShowAllClicked} style={{width: 150}}>Show All</button></div>
            <div className="row my-5 mx-4"><button className="btn btn-secondary" onClick={this.handleShowFinishedClicked} style={{width: 150}}>Show Finished</button></div>
            <div className="row my-5 mx-4"><button className="btn btn-secondary" onClick={this.handleShowOngoingClicked} style={{width: 150}}>Show Ongoing</button></div>
          </div>
          <div className="col-10 mt-4"><TodoList todoList={this.filterTodoList()} getCompletedId={this.getCompletedId} getEditId={this.getEditId} getDeletedId={this.getDeletedId}/></div>
        </div>
      </div>
    )
  }
}

export default App