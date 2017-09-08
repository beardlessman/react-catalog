import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import * as cartActions from '../../actions/CartActions'
// import Button from '../../components/Button'

class Cart extends Component {
  clearCart() {
    this.props.cartActions.clearCart()
  }
  render() {
    const cart = this.props.cart

    const quantity = cart.items.length
    let sum = 0

    cart.items.forEach(function(element) {
        sum = sum + element.userId * 100
    });
      console.log(cart);
      console.log(quantity, sum);

    return (
      <div className="cart">
        { (quantity > 0) ?
          <p className="cart__text">
            {quantity} тов. {sum} руб
            {/*<Button onClick={this.clearCart.bind(this)} mod="_clear"></Button>*/}
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
function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)