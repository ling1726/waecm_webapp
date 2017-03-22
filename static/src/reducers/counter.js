import * as types from '../actions/types';

const initialState = {value: 0};

export default function reducers(state = initialState, action){ debugger
    switch (action.type){
        case types.COUNTER_INCREMENT:
            return {...state, value: action.value};
        case types.COUNTER_REQUEST:
            return state;
        case types.COUNTER_SUCCESS:
            return {...state, value: action.value};
        case types.COUNTER_FAILED:
            return {...state};
        default:
            return state;
    }
}
