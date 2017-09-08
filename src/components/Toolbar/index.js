import React, { Component } from 'react'
import Sort from '../../containers/Sort'
import Pagination from '../../containers/Pagination'
import ViewListToggler from '../../containers/ViewListToggler'
import './style.css'

export default class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
          <h1 className="title">Заголовок</h1>
          <div className="toolbar__sort">
            <Sort />
          </div>
          <div className="toolbar__pagination">
            <Pagination />
          </div>
          <div className="toolbar__pagination">
              <ViewListToggler />
          </div>
      </div>
    )
  }
}