import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cartActions from '../../actions/CartActions'
import Button from '../../components/Button'
import Counter from '../../components/Counter'
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
    const itemPosition = cart.indexOf(data)
    cart.splice(itemPosition, 1)
    return cart
  }
  changeToNewQuantity(newQuantity) {
    const data = this.props.data
    const cartData = this.props.cart
    const quantity = this.calcQuantity(cartData.items, data.id)
    
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
        const itemPosition = newCart.indexOf(data)
        newCart.splice(itemPosition, 1)

        count--
      }
    }
    return newCart
  }
  
  addToCart = () => {
    this.changeCartItems(this.add());
  }
  removeFromCart = () => {
    this.changeCartItems(this.remove());
  }
  changeQuantity = (e) => {
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
            <p className="product-card__image">
              <img src="https://dummyimage.com/248x248/ccc/fff&text=something" />
            </p>
            <p className="product-card__title">{data.title}</p>
            <p className="product-card__price">{data.userId * 100} ₽</p>
            <div className="product-card__controls">
              {
                (quantity > 0) ? 
                    <Counter 
                        onInc={this.addToCart}
                        onDec={this.removeFromCart}
                        onChange={this.changeQuantity}
                        value={quantity} />
                :
                    <Button onClick={this.addToCart.bind(this)} text="Добавить в корзину" mod="_add" />
              }
            </div>
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