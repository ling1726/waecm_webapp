import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import counter from './counter';
import auth from './auth';
import user from './user';
import account from './account';
import stats from './stats';
import transfer from './transfer'

const rootReducer = combineReducers({
    counter,
    auth,
    user,
    account,
    stats,
    transfer,
    routing
});

export default rootReducer;
