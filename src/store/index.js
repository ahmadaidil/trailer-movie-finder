import { createStore, combineReducers } from 'redux'
import searchReducer from '../reducers/searchReducer'

const reducers = combineReducers({
  search: searchReducer
})

const store = createStore(reducers)

export default store