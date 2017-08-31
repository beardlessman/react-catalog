import { combineReducers } from 'redux'
import simple from './simple'
import user from './user'

export default combineReducers({
  simple,
  user
})