import React, { Component } from 'react'
import Todos from './Todos'

export class TodoContainer extends Component {
  state = {
    todoList: []
  }

  render() {
    return (
      <>
        <Todos
          todoList={this.state.todoList}
        />
      </>
    )
  }
}

export default TodoContainer
