import React, { Component, PropTypes } from 'react'
import Filter from '../../containers/Filter'
import Cart from '../../containers/Cart'
import {
  Route,
  Link
} from 'react-router-dom'
import './style.css'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/" className="logo"><img src="/logo_kdv.png" alt="" /></a>
          </div>
          <div className="header__filter">
            <Filter />
          </div>
          <div className="header__cart">
            <Cart />
          </div>
        </div>
      </header>
    )
  }
}