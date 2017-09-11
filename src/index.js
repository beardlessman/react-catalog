import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
    Route
  } from 'react-router-dom'
import App from './containers/App'
import './app.css'  
import { configureStore, history } from './store/configureStore'
import { ConnectedRouter } from 'react-router-redux'

export const STORE = configureStore();

render(
    <Provider store={STORE}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={App} />
                {/*<Route path="/q=:filter?&sort=:sortType?&direction=:direction?&page=:pageNum?" component={App} />*/}
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)