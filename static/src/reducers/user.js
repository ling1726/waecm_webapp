import * as types from '../actions/types';

const initialState = {
    email: null,
    firstname:null,
    lastname:null,
    balance:null,
    limit: null
};

export default function reducers(state = initialState, action){
    switch (action.type){
        case types.USER_GET_DATA_REQUEST:
            return state;
        case types.USER_GET_DATA_SUCCESS:
            return {...state, email: action.user.email, firstname:action.user.firstname, lastname:action.user.lastname, balance: action.user.balance, limit: action.user.limit};
        case types.USER_GET_DATA_FAILED:
            return {...state};
        default:
            return state;
    }
}
