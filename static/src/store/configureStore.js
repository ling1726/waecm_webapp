import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import authMiddleware from '../utils/AuthMiddleware';
import thunk from 'redux-thunk'; 
 
export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, authMiddleware)
    );
 
    return store;
}
