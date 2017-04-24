import * as types from '../actions/types';

const initialState = {message: null, error: false, tags:[]}

export default function reducers(state = initialState, action){
    switch (action.type){
        case types.TRANSFER_GET_DATA_REQUEST:
            return state;
        case types.TRANSFER_GET_DATA_SUCCESS:
            return {...state, message: action.message};
        case types.TRANSFER_GET_DATA_FAILED:
            return {...state, error: true};
        case types.TRANSFER_CREATE_REQUEST:
            return {...state, tan: undefined};
        case types.TRANSFER_CREATE_SUCCESS:
            return {...state, message: action.message};
        case types.TRANSFER_CREATE_FAILED:
            return {...state, error: true};
        case types.TRANSFER_GET_TAGS_REQUEST:
            return {...state};
        case types.TRANSFER_GET_TAGS_SUCCESS:
            return {...state, tags: action.tags}
        case types.TRANSFER_GET_TAGS_FAILED:
            return {...state, error: true};
        case types.TRANSFER_GET_TAN_REQUEST:
            return state;
        case types.TRANSFER_GET_TAN_SUCCESS:
            return {...state, tan: action.tan, message: action.message}
        case types.TRANSFER_GET_TAN_FAILED:
            return {...state, error: true};


        default:
            return state;
    }
}
