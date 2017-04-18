/**
 * Created by ubuntuvm on 18.04.17.
 */
import * as types from '../actions/types';


const initialState = {
    email: null,
    balance:null,
    limit: null
};

export default function reducers(state = initialState, action){
     switch (action.type){
        case types.CHANGELIMIT_REQUEST:
            return state;
        case types.CHANGELIMIT_SUCCESS:
            return {...state, email: action.user.email, balance: action.user.balance, limit: action.user.limit};
        case types.CHANGELIMIT_FAILED:
            return {...state};
        default:
            return state;
    }

}