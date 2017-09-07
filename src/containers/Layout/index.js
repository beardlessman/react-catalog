import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Route,
  Link
} from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
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