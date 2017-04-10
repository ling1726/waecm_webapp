import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import counter from './counter';
import auth from './auth';
import user from './user';
import account from './account'

const rootReducer = combineReducers({
    counter,
    auth,
    user,
    account,
    routing
});

export default rootReducer;
