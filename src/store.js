import { createStore } from 'redux'
import reducer from './reducer'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const enhancer = devTools


const store = createStore(reducer,enhancer)

export default store