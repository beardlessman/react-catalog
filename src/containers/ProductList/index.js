import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductCard from '../ProductCard'
import * as productListActions from '../../actions/ProductListActions'
import './style.css'
import './img/loader.gif'

class ProductList extends Component {
    componentDidMount() {
        this.props.productListActions.loadProducts()
    }
    filterData(data, filterText) {
        let filteredData = []
        data.forEach((product) => {
            if (product.title.indexOf(filterText) === -1) {
                return
            }
            filteredData.push(product)
        })
        return filteredData
    }
    sortingData(data, sortSettings) {
        const id = sortSettings.id
        const abc = sortSettings.abc
        const price = sortSettings.price
        const direction = sortSettings.direction 
        let sorted = data

        if (id) {
            sorted.sort(compareId)
        }
        else if (abc) {
            sorted.sort(compareABC)
        }
        else if (price) {
            sorted.sort(comparePrice)
        }

        function compareId(a, b) {
            if (a.id > b.id) return direction;
            if (a.id < b.id) return -direction;
        }
        function compareABC(a, b) {
            if (a.title > b.title) return direction;
            if (a.title < b.title) return -direction;
        }
        function comparePrice(a, b) {
            if (a.userId > b.userId) return direction;
            if (a.userId < b.userId) return -direction;
        }

        return sorted
    }

    render() {
        const fetching = this.props.list.fetching
        const error = this.props.list.error
        let products = []

        if (fetching) {
            return (
                <div>
                    <p><img className="product-list__loader" src="/static/img/loader.gif" /></p>  
                </div>
            ) 
        } else if (error) {
            return (
                <div>
                    <p className="error">Нихуя не загрузилось!</p>
                </div>
            ) 
        } else {
            const data = this.props.list.data
            const filterText = this.props.filter.filterText
            const sortSettings = this.props.sort 
            
            const filteredData = this.filterData(data, filterText)

            if (filteredData.length > 0) {
                const sortedData = this.sortingData(filteredData, sortSettings)
                
                products = sortedData.map((item, id) => {
                    return (
                        <ProductCard key={id} data={item}/>
                    )
                });

                return (
                    <div>
                        <div className="product-list">{products}</div>
                    </div>
                ) 
            } else {
                return (
                    <div>
                        <p className="error">Таких товаров не бывает :(</p>
                    </div>
                ) 
            }
        }
    }
}

function mapStateToProps (state) {
  return {
    list: state.productList,
    filter: state.filter,
    sort: state.productList.sortSettings
  }
}
function mapDispatchToProps(dispatch) {
    return {
        productListActions: bindActionCreators(productListActions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)