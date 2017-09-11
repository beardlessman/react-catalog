import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/AppActions'
import './style.css'
import Button from '../../components/Button'

class Sort extends Component {
    
    changeSorting(type) {
        const actions = this.props.actions;
        let newSettings = {...this.props.settings, sort: type};
        actions.changeSettings(newSettings)
    }
    changeDirection = () => {
        const actions = this.props.actions;
        let newSettings = {...this.props.settings, direction: -this.props.settings.direction};
        actions.changeSettings(newSettings);
    }

    render() {
        const settings = this.props.settings;
        return (
            <div className="sort">
                Сортировка:
                <div className="btn-group">
                    <Button onClick={() => this.changeSorting('id')} mod={settings.sort === 'id' ? ' active' : ''}>By ID</Button>
                    <Button onClick={() => this.changeSorting('abc')} mod={settings.sort === 'abc' ? ' active' : ''}>By name</Button>
                    <Button onClick={() => this.changeSorting('price')} mod={settings.sort === 'price' ? ' active' : ''}>By price</Button>
                </div>

                <Button onClick={this.changeDirection} mod={(settings.direction > 0) ? 'dirup' : 'dirdown'} ></Button>
            </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    settings: state.app.settings
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)