import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import counter from './counter';
import auth from './auth';
import user from './user';
import account from './account'
import settings from './settings'

const rootReducer = combineReducers({
    counter,
    auth,
    user,
    account,
    settings,
    routing
});

export default rootReducer;
