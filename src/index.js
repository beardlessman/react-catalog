import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import App from './containers/App'
import './app.css'  
import { configureStore, history } from './store/configureStore'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const STORE = configureStore();

const Test = ({store}) => (
    <div>
        <h2>Test</h2>
        <Link to="/">Link to App</Link>
    </div> 
)

render(
    <Provider store={STORE}>
        <ConnectedRouter history={history}>
            <Route component={App} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)