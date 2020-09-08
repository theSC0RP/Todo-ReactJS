import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    text: '',
  }

  handleTextChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleAddClicked = () => {
    this.props.addTodo({id: this.props.id, text: this.state.text, isFinished: false})
    this.setState({text: ''})
  }

  componentWillReceiveProps(newProps) {
    if(newProps.editText !== "") 
      this.setState({text: newProps.editText})
  }

  render() {
    return (
      <div className="d-flex">
        <input type="text" onChange = {this.handleTextChange} value = {this.state.text} placeholder="Enter new todo item" className="form-control "></input>
        <button className="ml-2 btn btn-primary" type="submit" onClick={this.handleAddClicked}>ADD</button>
      </div>
    )
  }
}

export default CreateTodo
