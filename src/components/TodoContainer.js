import React, { Component } from 'react'
import Todos from './Todos'

export class TodoContainer extends Component {
  state = {
    todoList: []
  }

  deleteTodoHandler = id=> {
    const filteredTodoList = this.state.todoList.filter(todo => todo.id !== id)
    this.setState({todoList: (filteredTodoList)})
  }

  render() {
    return (
      <>
        <Todos
          todoList={this.state.todoList}
          onDeleteTodo={this.deleteTodoHandler}
        />
      </>
    )
  }
}

export default TodoContainer