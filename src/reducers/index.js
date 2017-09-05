import { combineReducers } from 'redux'
import productList from './productList'
import filter from './filter'
import cart from './cart'

export default combineReducers({
  productList,
  filter,
  cart,
})