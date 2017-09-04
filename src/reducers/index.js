import { combineReducers } from 'redux'
import productList from './productList'
import filter from './filter'
import cart from './cart'
// import productCard from './productCard'

export default combineReducers({
  productList,
  filter,
  cart
})