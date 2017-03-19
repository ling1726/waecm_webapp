import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes'

/* initial states */
let state = {}

state.counter = {value: 0}

 
const store = configureStore(state);
const history = syncHistoryWithStore(browserHistory, store);
 
render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>,
	document.getElementById('root')
);
 
