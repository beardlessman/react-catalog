import { combineReducers } from 'redux'
import simple from './simple'
import user from './user'
import header from './header'
import productList from './productList'

export default combineReducers({
  simple,
  user,
  header,
  productList
})