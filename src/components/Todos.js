import React, { Component } from 'react'
import Todo from './Todo'

export class Todos extends Component {
  render() {
    return (
      <ul className='list-group'>
        {this.props.todoList.map( todo => (
            <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    )
  }
}

export default Todos
