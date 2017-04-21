/**
 * Created by ubuntuvm on 18.04.17.
 */
import * as types from '../actions/types';


const initialState = {
    message: null,
};

export default function reducers(state = initialState, action){
     switch (action.type){
        case types.CHANGELIMIT_REQUEST:
            return state;
        case types.CHANGELIMIT_SUCCESS:
            return {...state, message: action.message};
        case types.CHANGELIMIT_FAILED:
            return {...state};
        default:
            return state;
    }

}