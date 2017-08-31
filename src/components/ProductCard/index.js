import React, { Component, PropTypes } from 'react'
import './style.css'

export default class ProductCard extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="product-card">
          <div className="product-card__inner">
            <p>{data.id}</p>
            <p>{data.title}</p>
          </div>
      </div>
    )
  }
}