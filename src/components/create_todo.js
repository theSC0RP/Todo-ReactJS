import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    text: '',
    isFinished: false,
  }

  handleTextChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleAddClicked = () => {
    this.props.addTodo({id: this.props.id, text: this.state.text, isFinished: this.state.isFinished})
    this.setState({text: ''})
  }

  render() {
    return (
      <span>
        <input type="text" onChange = {this.handleTextChange} value = {this.state.text} placeholder="Enter new todo item"></input>
        <button onClick={this.handleAddClicked}>ADD</button>
      </span>
    )
  }
}

export default CreateTodo
