import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

class Cart extends Component {
  render() {
    const cart = this.props.cart
    const quantity = cart.items.length
    let sum = 0

    console.log(quantity)

    cart.items.forEach(function(element) {
        sum = sum + element.userId * 100
    });
    return (
      <div className={ (quantity > 0) ? 'cart' : 'cart hidden' }>
        <p>В корзине {quantity} товаров (а) на сумму {sum} рублей</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}
function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps)(Cart)