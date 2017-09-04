import { combineReducers } from 'redux'
import simple from './simple'
import user from './user'
import header from './header'
import productList from './productList'
import filter from './filter'
import cart from './cart'
// import productCard from './productCard'

export default combineReducers({
  simple,
  user,
  header,
  productList,
  filter,
  cart
})