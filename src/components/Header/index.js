import React, { Component, PropTypes } from 'react'
import './style.css'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        {this.props.data.text}
      </header>
    )
  }
}