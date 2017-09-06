import React, { Component, PropTypes } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import Sort from '../../containers/Sort'
import Pagination from '../../containers/Pagination'
import './style.css'

export default class Toolbar extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="toolbar">
          <h1 className="title">Заголовок</h1>
          <Route component={Sort} />
          <Route component={Pagination} />
      </div>
    )
  }
}