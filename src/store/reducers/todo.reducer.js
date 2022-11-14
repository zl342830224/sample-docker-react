import { handleActions as createReducer } from 'redux-actions'
import { load_todo_success, add_todo_success, remove_todo_success } from '../actions/todo.action'

const initialState = {
    todos: []
}

export default createReducer({
    [load_todo_success]: (state, action) => ({
        todos: action.payload
    }),
    [add_todo_success]: (state, action) => ({
        todos: [...state.todos, action.payload]
    }),
    [remove_todo_success]: (state, action) => {
        let id = action.payload
        let index = state.todos.findIndex(todo => todo.id === id)
        let todos = JSON.parse(JSON.stringify(state.todos))
        todos.splice(index, 1)
        return { todos }
    }
}, initialState)