/**
 * 1, async does
 * 2, 
 */

import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { load_todo, load_todo_success, add_todo, add_todo_success, remove_todo, remove_todo_success } from '../actions/todo.action'

function* load_todo_data() {
    let todoData = yield axios.get('http://localhost:3005/api/todos').then(res => res.data)
    yield put(load_todo_success(todoData))
}

function* add_todo_data(action) {
    let taskInfo = yield axios.post('http://localhost:3005/api/todos', {taskName: action.payload}).then(res => res.data)
    yield put(add_todo_success(taskInfo.task))
}

function* remove_todo_data(action) {
    let res = yield axios.delete('http://localhost:3005/api/todos', {params: {
        id: action.payload
    }}).then(res => res.data)
    yield put(remove_todo_success(res.tasks.id))
}

export default function* todoSaga() {
    yield takeEvery(load_todo, load_todo_data)
    yield takeEvery(add_todo, add_todo_data)
    yield takeEvery(remove_todo, remove_todo_data)
}