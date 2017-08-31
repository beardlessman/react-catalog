import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import * as productListActions from '../../actions/ProductListActions'
import './style.css'

class ProductList extends Component {
    componentWillMount() {
        this.props.productListActions.loadProducts();
    }
    render() {
        const data = this.props.list.data;
        const products = data.map((item, id) => {
            return (
                <ProductCard key={id} data={item}/>
            )
        });
        const productListActions = this.props.productListActions
        return (
          <div className="product-list">
              {products}
          </div>
        )
    }
}

function mapStateToProps (state) {
  return {
    list: state.productList
  }
}
function mapDispatchToProps(dispatch) {
    return {
        productListActions: bindActionCreators(productListActions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)