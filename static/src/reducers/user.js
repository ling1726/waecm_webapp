import * as types from '../actions/types';

const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    balance:null,
    limit: null,
    remaining: null
};

export default function reducers(state = initialState, action){ 
    switch (action.type){
        case types.USER_GET_DATA_REQUEST:
            return state;
        case types.USER_GET_DATA_SUCCESS:
            return {...state, firstName: action.user.firstName, lastName: action.user.lastName,
                email: action.user.email, balance: action.user.balance, limit: action.user.limit, remaining: action.user.remaining};
        case types.USER_GET_DATA_FAILED:
            return {...state};
        default:
            return state;
    }
}
