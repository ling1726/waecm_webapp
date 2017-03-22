import * as types from '../actions/types';

const initialState = {token: null, isLogged: false}

export default function reducers(state = initialState, action){
    switch (action.type){
        case types.AUTH_REQUEST:
            return state;
        case types.AUTH_SUCCESS:
            return {...state, token: action.token, isLogged: true};
        case types.AUTH_FAILED:
            return state;
        default:
            return state;
    }
}
