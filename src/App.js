import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

class App extends Component {
  state = {
    username: '',
  }
  usernameHandler = (username) => {
    this.setState({ username })
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route to='/'>
              <LoginPage onUsernameChange={this.usernameHandler} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
