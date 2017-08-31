import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import * as productListActions from '../../actions/ProductListActions'
import './style.css'
import './img/loader.gif'

class ProductList extends Component {
    componentWillMount() {
        this.props.productListActions.loadProducts();
    }
    render() {
        const data = this.props.list.data
        const fetching = this.props.list.fetching
        const error = this.props.list.error
        const products = data.map((item, id) => {
            return (
                <ProductCard key={id} data={item}/>
            )
        });
        const productListActions = this.props.productListActions
        return (
            <div>
                {
                    fetching ?
                    <p><img className="product-list__loader" src="/static/img/loader.gif" /></p>
                    :
                    error ? <p className="error">Нихуя не загрузилось!</p> : <div className="product-list">{products}</div>
                }
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