import React, { Component, PropTypes } from 'react'
import Toolbar from '../../components/Toolbar'
import ProductList from '../ProductList'
import './style.css'

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Toolbar />
        <ProductList />
      </div>
    )
  }
}