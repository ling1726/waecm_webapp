import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes'
import socketAPI from './utils/SocketAPI'

/* initial states */
let state = {};


const socketApi = new socketAPI(); 
const store = configureStore(state, socketApi);
const history = syncHistoryWithStore(browserHistory, store);

// should delete the token on exit
window.onbeforeunload = function() {
  localStorage.removeItem(key);
  return '';
};
render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>,
	document.getElementById('root')
);
 
