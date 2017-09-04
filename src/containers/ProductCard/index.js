import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cartActions from '../../actions/CartActions'
import './style.css'

class ProductCard extends Component {
  calcQuantity(arr, id) {
    let quantity = 0
    arr.forEach(function(element) {
      if (element.id == id) {
        quantity += 1
      }
    }, this);

    return quantity
  }

  add() {
    const data = this.props.data
    let cart = this.props.cart.items.slice()
    cart.push(data)
    return cart
  }
  remove() {
    const data = this.props.data
    let cart = this.props.cart.items.slice()
    const id = data.id
    function getItemPosition(cart) {
      let num = 0;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
          num = i
        }
      }
      return num
    }
    const itemPosition = getItemPosition(cart)
    cart.splice(itemPosition, 1)
    return cart
  }
  changeToNewQuantity(newQuantity) {
    const data = this.props.data
    const cartData = this.props.cart
    const id = data.id
    const quantity = this.calcQuantity(this.props.cart.items, this.props.data.id)
    
    let newCart = cartData.items.slice()

    if (newQuantity > quantity) {
      let count = newQuantity - quantity

      while (count > 0) {
        newCart.push(data)
        count--
      }
    } else if (quantity > newQuantity) {
      let count = quantity - newQuantity
      
      while (count > 0) {
        function getItemPosition(cart) {
          let num = 0;
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
              num = i
            }
          }
          return num
        }
        const itemPosition = getItemPosition(newCart)
        newCart.splice(itemPosition, 1)

        count--
      }
    }
    return newCart
  }
  
  addToCart() {
    this.changeCartItems(this.add());
  }
  removeFromCart = () => {
    this.changeCartItems(this.remove());
  }
  changeQuantity(e) {
    this.changeCartItems(this.changeToNewQuantity(e.target.value));
  }
  changeCartItems(data) {
    this.props.cartActions.addItemToCart(data)
  }

  render() {
    const data = this.props.data
    const quantity = this.calcQuantity(this.props.cart.items, data.id)

    return (
      <div className="product-card">
          <div className="product-card__inner">
            <p><strong>Номер</strong>: {data.id}</p>
            <p><strong>Название</strong>: {data.title}</p>
            <p><strong>Цена</strong>: {data.userId * 100} рублей</p>
            {
              (quantity > 0) ?
              <p>
                <button onClick={this.removeFromCart}>-</button>
                <input type="number" value={quantity} onChange={this.changeQuantity.bind(this)}/>
                <button onClick={this.addToCart.bind(this)}>+</button>
              </p>
              :
              <button onClick={this.addToCart.bind(this)}>Добавить в корзину</button> 
            }
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)