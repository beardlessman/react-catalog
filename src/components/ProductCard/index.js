import React, { Component, PropTypes } from 'react'
import './style.css'

export default class ProductCard extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="product-card">
          <div className="product-card__inner">
            <p><strong>Номер</strong>: {data.id}</p>
            <p><strong>Название</strong>: {data.title}</p>
            <p><strong>Цена</strong>: {data.userId * 100} рублей</p>
          </div>
      </div>
    )
  }
}