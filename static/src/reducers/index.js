import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import counter from './counter';
import auth from './auth';

const rootReducer = combineReducers({
    counter,
    auth, 
    routing
});

export default rootReducer;
