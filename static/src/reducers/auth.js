import * as types from '../actions/types';

const initialState = {
                        token: null, 
                        isLogged: false, 
                        error: false, 
                        notification: null
                    }

export default function reducers(state = initialState, action){ 
    switch (action.type){ 
        case types.AUTH_REQUEST:
            return state;
        case types.AUTH_SUCCESS:
            return {...state, token: action.token, isLogged: true, error: false};
        case types.AUTH_FAILED:
            return {...state, error: true};
        case types.AUTH_LOGOUT:
            return {...state, isLogged: false};
        case types.NOTIFICATION:
            return {...state, notification: action.result};
        case types.SOCKET_CONNECT_SUCCESS:
        case types.SOCKET_CONNECT_FAILED:
        case types.SOCKET_CONNECT_REQUEST:
        case types.SOCKET_ATTACH_REQUEST:
        case types.SOCKET_ATTACH_SUCCESS:
        case types.SOCKET_ATTACH_FAILED:
            return state;
        default:
            return state;
    }
}
