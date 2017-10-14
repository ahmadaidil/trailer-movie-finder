import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import searchReducer from '../reducers/searchReducer'

const reducers = combineReducers({
  search: searchReducer
})

const middleware = applyMiddleware(thunk)
const store = createStore(reducers, middleware)

export default store
