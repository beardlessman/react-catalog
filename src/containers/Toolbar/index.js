import React, { Component } from 'react'
import Sort from '../../containers/Sort'
import Pagination from '../../components/Pagination'
import ViewListToggler from '../../containers/ViewListToggler'
import './style.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../../actions/AppActions';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
          <h1 className="title">Заголовок</h1>
          <div className="toolbar__sort">
            <Sort />
          </div>
          <div className="toolbar__pagination">
            <Pagination 
                onChangeSettings={this.props.appActions.changeSettings} 
                limit={this.props.settings.pagination.limit}
                total={this.props.meta.total}
                offset={this.props.settings.pagination.offset}
                fullSettings={this.props.settings}
            />
          </div>
          <div className="toolbar__pagination">
              <ViewListToggler />
          </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {
        settings: state.app.settings,
        meta: state.app.meta
    }
}
function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)