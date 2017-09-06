import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductCard from '../ProductCard'
import Pagination from '../Pagination'
import * as productListActions from '../../actions/ProductListActions'
import './style.css'
import './img/loader.gif'

class ProductList extends Component {
    componentDidMount() {
        const settings = this.props.settings
        this.props.productListActions.loadProducts(settings)
    }

    justChangeSettings() {
        const settings = this.props.settings
        const page = +this.props.match.params.page
        if (page) {
            const limit = settings.pagination.limit
            settings.pagination.offset = (page - 1)  * limit
        }
        this.props.productListActions.justChangeSettings(settings)
    }

    render() {
        const fetching = this.props.fetching
        const error = this.props.error
        let products = []

        if (fetching) {
            return (
                <div>
                    <p><img className="product-list__loader" src="/loader.gif" /></p>  
                </div>
            ) 
        } else if (error) {
            return (
                <div>
                    <p className="error">Нихуя не загрузилось!</p>
                </div>
            ) 
        } else {
            const rawData = this.props.list
            const data = this.magic(rawData)
            const page = this.props.settings.pagination.offset / this.props.settings.pagination.limit + 1

            this.justChangeSettings()

            if (data.length > 0) {
                products = data.map((item, id) => {
                    return (
                        <ProductCard key={id} data={item}/>
                    )
                });
    
                return (
                    <div>
                        {/* <p>страница #{page}</p> */}
                        <Pagination />
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

    // Filtering and sorting data
    magic (rawData) {
        const filterText = this.props.settings.filter.text
        const sortSettings = this.props.settings.sort 
        
        const filteredData = filterData(rawData, filterText)
        const data = sortingData(filteredData, sortSettings)

        function filterData(data, filterText) {
            let filteredData = []
            data.forEach((product) => {
                if (product.title.indexOf(filterText) === -1) {
                    return
                }
                filteredData.push(product)
            })
            return filteredData
        }
        function sortingData(data, sortSettings) {
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

        return data
    }
}
function mapStateToProps (state) {
  return {
    list: state.productList.data,
    fetching: state.productList.fetching,
    error: state.productList.error,
    settings: state.productList.settings
  }
}
function mapDispatchToProps(dispatch) {
    return {
        productListActions: bindActionCreators(productListActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)