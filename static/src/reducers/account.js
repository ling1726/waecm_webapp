import * as types from '../actions/types';

const initialState = {
    iban: null,
    bic:null
};

export default function reducers(state = initialState, action){
    switch (action.type){
        case types.ACCOUNT_GET_DATA_REQUEST:
            return state;
        case types.ACCOUNT_GET_DATA_SUCCESS:
            return {...state, iban: action.account.iban, bic: action.account.bic};
        case types.ACCOUNT_GET_DATA_FAILED:
            return {...state};
        case types.ACCOUNT_GET_ACTIVITY_REQUEST:
            return state;
        case types.ACCOUNT_GET_ACTIVITY_SUCCESS:
            return {...state, transfers: action.transfers}
        case types.ACCOUNT_GET_ACTIVITY_FAILED:
            return state;
        default:
            return state;
    }
}
