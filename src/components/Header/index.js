import React, { Component, PropTypes } from 'react'
import './style.css'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__inner">
          {this.props.data.text}
        </div>
      </header>
    )
  }
}