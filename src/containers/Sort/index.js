import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sortActions from '../../actions/SortActions'
import './style.css'

class Sort extends Component {
    
    changeSorting(type) {
        const actions = this.props.sortActions
        const settings = this.props.sort.settings
        let direction = settings.direction

        const typeSet = settings[type] ? false : true
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
      const actions = this.props.sortActions
      const settings = this.props.sort.settings
      let direction = -settings.direction

      const newSettings = Object.assign({}, settings);

      newSettings.direction = direction

      console.log(newSettings)
      actions.changeSorting(newSettings)
    }

    render() {
        const sort = this.props.sort.settings
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
    sort: state.sort
  }
}
function mapDispatchToProps(dispatch) {
  return {
    sortActions: bindActionCreators(sortActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)