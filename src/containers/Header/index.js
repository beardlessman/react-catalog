import React, { Component } from 'react';
import Filter from '../../components/Filter';
import Cart from '../Cart';
import { bindActionCreators } from 'redux';
import './style.css';
import { connect } from 'react-redux';
import * as appActions from '../../actions/AppActions';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/" className="logo"><img src="/logo_kdv.png" alt="" /></a>
          </div>
          <div className="header__filter">
            <Filter action={this.props.appActions.changeSettings} initialSet={this.props.settings} />
          </div>
          <div className="header__cart">
            <Cart />
          </div>
        </div>
      </header>
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
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);