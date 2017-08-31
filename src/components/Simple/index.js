import React, { Component, PropTypes } from 'react'
import './style.css'

export default class Simple extends Component {
  buttonHandler(e) {
    e.preventDefault();
    this.props.changeHello('Ку-ку')
  }
  render() {
    const text = this.props.data.text
    return (
      <div className="text">
        <button onClick={this.buttonHandler.bind(this)}>Изменить приветствие</button>
      </div>
    )
  }
}