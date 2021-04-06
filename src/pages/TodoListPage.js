import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../components/Header'

export class TodoListPage extends Component {
  render() {
    const { username, history, onUsernameChange } = this.props
    if (!username) history.push('/')
    return (
      <div className='container'>
        <Header username={username} onUsernameChange={onUsernameChange} />
      </div>
    )
  }
}

export default withRouter(TodoListPage)
