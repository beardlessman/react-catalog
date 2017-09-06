import React, { Component, PropTypes } from 'react'
import Sort from '../../containers/Sort'
import Pagination from '../../containers/Pagination'
import './style.css'

export default class Toolbar extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="toolbar">
          <h1 className="title">Заголовок</h1>
          <Sort />
          {/* <Pagination /> */}
      </div>
    )
  }
}