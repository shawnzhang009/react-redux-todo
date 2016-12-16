import { createStore } from 'redux'
import todoApp from '../reducers/index'

export const todoStore = createStore(todoApp);