import React, { Component, PropTypes } from 'react'
import Toolbar from '../../components/Toolbar'
import ProductList from '../ProductList'
import { connect } from 'react-redux'
import {
  Route,
  Link
} from 'react-router-dom'
import './style.css'

const Test = () => (
  <div>
    <Link to="/">Link to App</Link>
    <h2>Test</h2>
  </div>
)

export default class Content extends Component {
  render() {
    
    return (
      <div className="content">
        <Route component={Toolbar} />
        <Route path="/test" component={Test} />
        <Route exact path="/" component={ProductList} />
        <Route path="/page=:page" component={ProductList} />
        {/* <Route path="/" component={ProductList} /> */}
      </div>
    )
  }
}