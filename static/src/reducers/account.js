import * as types from '../actions/types';

const initialState = {
    iban: null,
    bic:null
};

export default function reducers(state = initialState, action){
    switch (action.type){
        default:
            return state;
    }
}
