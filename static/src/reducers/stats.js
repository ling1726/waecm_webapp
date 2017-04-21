import * as types from '../actions/types';

const initialState = {
    interval: "daily",
    datapoints: null,
};

export default function reducers(state = initialState, action){
    switch (action.type){
        case types.STATS_GET_DATA_FOR_INTERVAL_REQUEST:
            return state;
        case types.STATS_GET_DATA_FOR_INTERVAL_SUCCESS:
            return {...state, datapoints: action.stats};
        case types.STATS_GET_DATA_FOR_INTERVAL_FAILED:
            return {...state};
        default:
            return state;
    }
}
