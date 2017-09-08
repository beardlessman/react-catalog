import React, { Component } from 'react'
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
      if (element.id === id) {
        quantity += 1
      }
    }, this);

    return quantity;
  }

  addToCart = () => {
    this.props.cartActions.addItemToCart(this.props.data);
  }
  removeFromCart = () => {
    this.props.cartActions.removeItemFromCart(this.props.data);
  }
  changeQuantity = (e) => {
    this.props.cartActions.changeItemQuantity(this.props.data, e.target.value);
  }

  render() {
    const data = this.props.data;
    const quantity = this.calcQuantity(this.props.cart.items, data.id);
    const view = this.props.view;
    const className = `product-card product-card_${view}`;

    return (
      <div className={className}>
          <div className="product-card__inner">
            <img className="product-card__image" src="https://dummyimage.com/248x248/ccc/fff&text=something" alt="product img" />
            <div className="product-card__content">
              <p className="product-card__title">{data.title}</p>
              <p className="product-card__description">{data.body}</p>
              <p className="product-card__price">{data.userId * 100} ₽</p>
            </div>
            <div className="product-card__controls">
              {
                (quantity > 0) ? 
                    <Counter 
                        onInc={this.addToCart}
                        onDec={this.removeFromCart}
                        onChange={this.changeQuantity}
                        value={quantity} />
                :
                    <Button onClick={this.addToCart} mod="_add">Добавить в корзину</Button>
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