import { combineReducers } from 'redux'
import simple from './simple'
import user from './user'
import header from './header'

export default combineReducers({
  simple,
  user,
  header
})