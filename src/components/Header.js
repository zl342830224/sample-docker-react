import React, { Component } from 'react'
import * as todoActions from '../store/actions/todo.action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 

class Header extends Component {
    
    addTodo = (ev) => {
        if (ev.keyCode === 13) {
            let taskName = ev.target.value
            if (taskName.trim().length === 0) {
                alert("please input taskName")
                return
            }
            this.props.add_todo(taskName)
            ev.target.value = ''
        }
    }
    render () {
        console.log(this.props)
        return (
            <header>
                <h1>todos</h1>
                <input onKeyUp={this.addTodo} placeholder="anything else need to do?" autoFocus />
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todos
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)