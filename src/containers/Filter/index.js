import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as filterActions from '../../actions/FilterActions'
import * as productListActions from '../../actions/ProductListActions'
import './style.css'

class Filter extends Component {
    
    inputFilterText = (e) => {
      e.preventDefault()
        const actions = this.props.filterActions
        const listActions = this.props.productListAction
        const filterText = document.getElementById("filterText").value

        listActions.loadProducts()
        actions.inputFilterText(filterText)
    }

    inputHandler = (e) => {
      const actions = this.props.filterActions
      actions.changeInputText(e.target.value)
    }

    render() {
        const filter = this.props.filter
        return (
            <div className="filter">
                <form onSubmit={this.inputFilterText}>
                    <input id="filterText" type="text" placeholder="Search..." value={filter.inputText} onChange={this.inputHandler}/>
                    <button type="submit">ПОШЕЛ</button> 
                </form>
            </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    filter: state.filter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    filterActions: bindActionCreators(filterActions, dispatch),
    productListAction: bindActionCreators(productListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)