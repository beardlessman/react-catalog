import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as productListActions from '../../actions/ProductListActions'
import './style.css'

class Sort extends Component {
    
    changeSorting(type) {
        const actions = this.props.actions
        const settings = this.props.settings
        let direction = settings.direction

        const typeSet = settings[type] ? false : true

        if (typeSet == false) {
          return false
        }

        const newSettings = Object.assign({}, settings);

        for (var key in newSettings) {
            newSettings[key] = false
        }
        newSettings.direction = direction
        newSettings[type] = typeSet

        console.log(newSettings)

        actions.changeSorting(newSettings)
    }
    changeDirection() {
      const actions = this.props.actions
      const settings = this.props.settings
      let direction = -settings.direction

      const newSettings = Object.assign({}, settings);

      newSettings.direction = direction

      actions.changeSorting(newSettings)
    }

    render() {
        const sort = this.props.settings
        return (
            <div className="sort">
                <button onClick={() => this.changeSorting('id')} className={sort.id ? 'sort-btn active' : 'sort-btn'}>Default</button>
                <button onClick={() => this.changeSorting('abc')} className={sort.abc ? 'sort-btn active' : 'sort-btn'}>Sort by name</button>
                <button onClick={() => this.changeSorting('price')} className={sort.price ? 'sort-btn active' : 'sort-btn'}>Sort by price</button>

                <button onClick={() => this.changeDirection()} className={(sort.direction > 0) ? 'dir-btn up' : 'dir-btn down'} ></button>
            </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    settings: state.productList.sortSettings
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)