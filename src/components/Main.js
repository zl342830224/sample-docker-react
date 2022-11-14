import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../store/actions/todo.action'

class Main extends Component {

    removeTask(id) {
        if (window.confirm('sure to delete this item')) {
            this.props.remove_todo(id)
        }
    }

    componentDidMount () {
        this.props.load_todo()
    }

    render () {
        return (
            <section>
                <input type="checkbox" />
                <ul>
                    {this.props.todos.map(item => (
                        <li key={item.id}>
                            <div>
                                <input type="checkbox" />
                                <label>{item.taskName}</label>
                                <button onClick={this.removeTask.bind(this, item.id)}>close</button>
                            </div>
                            <input value="create a todoMVC template" />
                        </li>
                    ))}
                    
                </ul>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todos 
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)