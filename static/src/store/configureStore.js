import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import authMiddleware from '../utils/AuthMiddleware';
import socketMiddleware from '../utils/SocketMiddleware';
import thunk from 'redux-thunk'; 
 
export default function configureStore(initialState, socketApi) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, authMiddleware, socketMiddleware(socketApi))
    );
 
    return store;
}
