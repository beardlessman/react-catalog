import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/AppActions'
import './style.css'
import Button from '../../components/Button'

class ViewListToggler extends Component {
    toggleView = () => {
        let view = this.props.view;
        console.log(view);
        if (view === 'grid') {
            view = 'list';
        } else {
            view = 'grid';
        }

        this.props.actions.changeViewList(view);
    };
    render() {
        const view = this.props.view;
        return (
            <div className="viewToggler">
                Отображение:
                <div className="btn-group">
                    <Button onClick={this.toggleView} mod={ (view === 'grid') ? ' active' : ''}>Сетка</Button>
                    <Button onClick={this.toggleView} mod={ (view === 'list') ? ' active' : ''}>Список</Button>
                </div>
            </div>
        )
    };
}

function mapStateToProps (state) {
    return {
        view: state.app.viewList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewListToggler)