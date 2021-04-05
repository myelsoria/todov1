import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { loginFormValidation } from '../validation/loginFormValidation'
import { withRouter } from 'react-router-dom'

export class LoginForm extends Component {
  state = {
    error: '',
  }

  validatePassword = (values) => {
    if (values.username === 'myaccount' && values.password === '123456') {
        this.props.onUsernameChange(values.username)
        this.props.history.push('/todolist')
    } else this.setState({ error: 'Invalid Credentials' })
  }

  render() {
    return (
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginFormValidation}
        onSubmit={(values) => {
          this.validatePassword(values)
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik
          return (
            <div className='container'>
              <Form>
                <div className='form-group'>
                  <Field
                    type='text'
                    name='username'
                    placeholder='username'
                    className='form-control'
                    id='username'
                  />
                  <ErrorMessage
                    name='username'
                    component='span'
                    className='text-danger'
                  />
                </div>
                <div className='form-group'>
                  <Field
                    type='password'
                    name='password'
                    placeholder='password'
                    className='form-control'
                    id='password'
                  />
                  <ErrorMessage
                    name='password'
                    component='span'
                    className='text-danger'
                  />
                </div>
                <button type='submit' className='btn btn-primary btn-block'>
                  Login
                </button>
                {this.state.error && (
                  <div
                    className='alert alert-danger text-center mt-3'
                    role='alert'
                  >
                    {this.state.error}
                  </div>
                )}
              </Form>
            </div>
          )
        }}
      </Formik>
    )
  }
}

export default withRouter(LoginForm)
