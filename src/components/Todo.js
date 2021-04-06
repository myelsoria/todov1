import React, { Component } from 'react'

export class Todo extends Component {
  render() {
    const { todoText } = this.props.todo
    return (
      <li
        className='list-group-item d-flex justify-content-between align-items-center'
        style={{ padding: '4px 12px', minHeight: '42px' }}
      >
        <span className='text-break'>{todoText}</span>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </li>
    )
  }
}

export default Todo
