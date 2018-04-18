import React, { Component } from 'react'
import {
  Route
} from 'react-router-dom'
import Header from '../../containers/Header'
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
          <Route component={Content}/>
        </div>
        <div className="layout__footer">
          <Footer />
        </div>
      </div>
    )
  }
}