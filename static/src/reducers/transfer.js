import * as types from '../actions/types';

const initialState = {message: null, error: false}

export default function reducers(state = initialState, action){
    switch (action.type){
        case types.TRANSFER_GET_DATA_REQUEST:
            return state;
        case types.TRANSFER_GET_DATA_SUCCESS:
            return {...state};
        case types.TRANSFER_GET_DATA_FAILED:
            return {...state, error: true};
        case types.TRANSFER_CREATE_REQUEST:
            return state;
        case types.TRANSFER_CREATE_SUCCESS:
            return {...state, message: action.message};
        case types.TRANSFER_CREATE_FAILED:
            return {...state, error: true};
        default:
            return state;
    }
}
