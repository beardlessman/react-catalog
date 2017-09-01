import React, { Component, PropTypes } from 'react'
import Filter from '../../containers/Filter'
import './style.css'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__inner">
          <Filter />
        </div>
      </header>
    )
  }
}