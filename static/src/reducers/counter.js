import * as types from '../actions/types';

const initialState = {value: 0};

export default function reducers(state = initialState, action){ 
    switch (action.type){
        case types.COUNTER_REQUEST:
            return state;
        case types.COUNTER_SUCCESS:
            return {...state, value: action.value};
        case types.COUNTER_FAILED:
            return {...state};
        case types.COUNTER_INCREMENT:
            return { value: action.value};
        case types.COUNTER_INCREMENT_FAILED:
            return {...state};
        case types.COUNTER_INCREMENT_SUCCESS:
            return {...state, value: action.value, error: undefined};
        case types.COUNTER_INCREMENT_UNAUTHORIZED:
            return {...state, error: action.error};
        default:
            return state;
    }
}
