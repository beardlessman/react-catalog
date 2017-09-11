import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Cart extends Component {
  render() {
    const cart = this.props.cart;

    const quantity = cart.items.length;
    let sum = 0;

    cart.items.forEach(function(element) {
        sum = sum + element.userId * 100;
    });

    return (
      <div className="cart">
        { (quantity > 0) ?
          <p className="cart__text">
            {quantity} тов. {sum} руб
          </p>
        :
        <p className="cart__text cart__text-empty">В корзине пусто</p>
        }
        
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart);