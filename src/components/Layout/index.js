import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import {
  Route
} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Content from '../Content'
import './style.css'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="layout__header">
          <Header/>
        </div>
        <div className="layout__content">
          <Route component={Content} className="layout__content"/>
        </div>
        <div className="layout__footer">
          <Footer />
        </div>
      </div>
    )
  }
}