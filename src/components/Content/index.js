import React, { Component } from 'react'
import Toolbar from '../../containers/Toolbar'
import ProductList from '../../containers/ProductList'
import {
  Route
} from 'react-router-dom'
import './style.css'

export default class Content extends Component {
  render() {
    
    return (
      <div className="content">
        <Toolbar />
        <Route component={ProductList} />
      </div>
    )
  }
}