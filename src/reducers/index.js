import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import cart from './cart'
import app from './app'

export default combineReducers({
  app,
  cart,
  router: routerReducer
})