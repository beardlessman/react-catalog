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

        let newSettings = {}
        for (var key in this.props.settings) {
          newSettings[key] = this.props.settings[key];
        }

        newSettings.filter.text = filterText

        listActions.changeSettings(newSettings)
        listActions.loadProducts(newSettings)
        actions.inputFilterText(filterText)
    }

    inputHandler = (e) => {
      const actions = this.props.filterActions
      actions.changeInputText(e.target.value)
    }

    render() {
        const filter = this.props.filter
        const settings = this.props.settings
        return (
            <div className="filter">
                <form onSubmit={this.inputFilterText}>
                    <input id="filterText" type="text" placeholder="Search..." value={filter.inputText} onChange={this.inputHandler}/>
                    {
                      (settings.filter.text.length > 0) ?
                      <button type="submit">{settings.filter.text}</button> 
                      :
                      <button type="submit">GO</button> 
                    }
                </form>
            </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    filter: state.filter,
    settings: state.productList.settings
  }
}
function mapDispatchToProps(dispatch) {
  return {
    filterActions: bindActionCreators(filterActions, dispatch),
    productListAction: bindActionCreators(productListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)