import { combineReducers } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import productList from './productList'
import filter from './filter'
import cart from './cart'

export default combineReducers({
  productList,
  filter,
  cart,
  router: routerReducer
})