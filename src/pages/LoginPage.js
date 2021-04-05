import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'

export class LoginPage extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <div className='border border-dark px-4 py-5'>
          <LoginForm onUsernameChange={this.props.onUsernameChange} />
        </div>
      </div>
    )
  }
}

export default LoginPage
