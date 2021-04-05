import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class TodoListPage extends Component {
    render() {
        const {username, history} = this.props
        if(!username) history.push('/')
        return (
            <div>
                
            </div>
        )
    }
}

export default withRouter(TodoListPage)
