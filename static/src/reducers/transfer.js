import * as types from '../actions/types';

const initialState = {
    iban: null,
    bic:null,
};

export default function reducers(state = initialState, action){
    switch (action.type){
        case types.TRANSFER_REQUEST:
            return state;
        case types.TRANSFER_SUCCESS:
            return state;
        case types.TRANSFER_FAILED:
            return state;
        default:
            return state;
    }
}
